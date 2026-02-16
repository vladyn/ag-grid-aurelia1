// ag-grid-aurelia-plugin v31.3.10
import { BindableProperty, HtmlBehaviorResource, metadata } from "aurelia-framework";
export function generateBindables(names, bindingModeToUse) {
    return function (target, key, descriptor) {
        // get or create the HtmlBehaviorResource
        // on which we're going to create the BindableProperty's
        let behaviorResource = metadata.getOrCreateOwn(metadata.resource, HtmlBehaviorResource, target);
        let nameOrConfigOrTargets = names.map((name) => {
            let nameOrConfigOrTarget = {
                name: name
            };
            if (bindingModeToUse) {
                nameOrConfigOrTarget["defaultBindingMode"] = bindingModeToUse;
            }
            return nameOrConfigOrTarget;
        });
        nameOrConfigOrTargets.forEach((nameOrConfigOrTarget) => {
            let prop = new BindableProperty(nameOrConfigOrTarget);
            prop.registerWith(target, behaviorResource, descriptor);
        });
    };
}
