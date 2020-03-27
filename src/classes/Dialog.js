/**
 * Dialog Class
 * @author Victor Cunha <vcunha@neoassist.com>
 */
export default class Dialog {
  constructor() {
    if (arguments.length > 0) {
      let dialog = arguments[0];

      this.nodeId = dialog.dialog_node;
      this.title = dialog.title || "";
      this.context = dialog.context || "";
      this.conditions = dialog.conditions;

      if (dialog.output) {
        if (dialog.output.generic) {
          this.output = dialog.output.generic.map(output => output.values.map(text => text.text))[0]
        } else if (dialog.output.text) {
          this.output = dialog.output.text.values;
        } else {
          this.output = dialog.output;
        }
      }

      if (dialog.next_step) {
        switch (dialog.next_step.behavior) {
          case "jump_to":
            this.then = {
              "action": "jump",
              "check": dialog.next_step.selector,
              "to": dialog.next_step.dialog_node
            }
            break;

          case "skip_user_input":
            this.then = {
              "action": "skip"
            }
            break;

          default:
            this.then = ""
            break;
        }
      }

      this.previous = dialog.previous_sibling || "";
      this.parent = dialog.parent || "";
      this.type = dialog.type || "";
    }
  }

  getTitle() {
    if (this.title) {
      return this.title
    } else if (this.conditions) {
      return this.conditions
    }
    return this.nodeId
  }
}
