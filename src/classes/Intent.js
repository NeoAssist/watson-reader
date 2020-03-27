/**
 * Intent Class
 * @author Victor Cunha <vcunha@neoassist.com>
 */
export default class Intent {
  constructor() {
    if(arguments.length > 0){
      let intent = arguments[0];
      this.title = intent.intent || "";
      if (Array.isArray(intent.examples)) {
        this.examples = intent.examples.map(value => value.text);
      } else {
        this.examples = [];
      }
      this.description = intent.description || "";
    }
  }
}
