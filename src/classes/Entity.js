/**
 * Entity Class
 * @author Victor Cunha <vcunha@neoassist.com>
 */
export default class Entity {
    constructor() {
        if (arguments.length > 0) {
            let entity = arguments[0];
            this.title = entity.entity || "";
            this.values = {};
            if (Array.isArray(entity.values)) {
                entity.values.forEach(element => {
                    this.values[element.value] = element.synonyms
                });
            }
            this.type = entity.type || "";
        }
    }
}
