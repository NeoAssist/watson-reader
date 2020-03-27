import Dialog from './Dialog';
import Entity from './Entity';
import Intent from './Intent';

class Handler {
  constructor() {
    if (arguments.length > 0) {
      var File = arguments[0];

      this.name = File.name;
      this.language = File.language;
      this.description = File.description;

      this.intents = File.intents.map(intent => new Intent(intent));
      this.entities = File.entities.map(entity => new Entity(entity));
      if (Array.isArray(File.dialog_nodes)) {
        this.dialogs = File.dialog_nodes.map(dialog => new Dialog(dialog));
      }
    }
  }

  buildTree() {
    if (!this.dialogs) {
      return false;
    }

    var scoreArray = [];

    this.dialogs.forEach(dialog => {
      let score = this.backTrace(dialog);
      if (scoreArray[score] === undefined) {
        scoreArray[score] = [];
      }
      scoreArray[score].push(dialog.nodeId)
    });

    var tree = {};
    this.dialogs.forEach(dialog => {
      tree[dialog.nodeId] = dialog
    });

    let i = scoreArray.length - 1;
    while (i > 0) {
      scoreArray[i].forEach(nodeId => {
        let parent = this.getDialog({ "nodeId": nodeId })[0];

        if (tree[parent.parent].children === undefined) {
          tree[parent.parent].children = [];
        }

        tree[parent.parent].children.push(tree[nodeId]);
        delete tree[nodeId];
      })
      i--;
    }

    this.tree = tree;
  }

  backTrace(dialog, score = 0) {
    if (Array.isArray(dialog)) {
      dialog = dialog.shift()
    }
    if (dialog.parent) {
      let parent = this.getDialog({ "nodeId": dialog.parent })[0];
      return this.backTrace(
        parent,
        ++score
      );
    } else {
      return score;
    }
  }

  getDialog(query, population = this.dialogs) {
    if (!population) {
      return false;
    }

    var field = Object.keys(query)[0];
    var result = [];

    population.forEach(dialog => {
      if (dialog[field] == query[field]) {
        result.push(dialog);
      }
    });

    return result;
  }
}

export {
  Handler,
  Dialog,
  Entity,
  Intent
}
