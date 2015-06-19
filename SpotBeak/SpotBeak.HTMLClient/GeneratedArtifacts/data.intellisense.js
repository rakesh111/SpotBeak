/// <reference path="data.js" />

(function (lightSwitchApplication) {

    msls._addEntryPoints(lightSwitchApplication.Client, {
        /// <field>
        /// Called when a new client is created.
        /// <br/>created(msls.application.Client entity)
        /// </field>
        created: [lightSwitchApplication.Client]
    });

    msls._addEntryPoints(lightSwitchApplication.Hub, {
        /// <field>
        /// Called when a new hub is created.
        /// <br/>created(msls.application.Hub entity)
        /// </field>
        created: [lightSwitchApplication.Hub]
    });

    msls._addEntryPoints(lightSwitchApplication.Spot, {
        /// <field>
        /// Called when a new spot is created.
        /// <br/>created(msls.application.Spot entity)
        /// </field>
        created: [lightSwitchApplication.Spot]
    });

    msls._addEntryPoints(lightSwitchApplication.Card, {
        /// <field>
        /// Called when a new card is created.
        /// <br/>created(msls.application.Card entity)
        /// </field>
        created: [lightSwitchApplication.Card]
    });

    msls._addEntryPoints(lightSwitchApplication.SpotAssignment, {
        /// <field>
        /// Called when a new spotAssignment is created.
        /// <br/>created(msls.application.SpotAssignment entity)
        /// </field>
        created: [lightSwitchApplication.SpotAssignment]
    });

    msls._addEntryPoints(lightSwitchApplication.CardAssignment, {
        /// <field>
        /// Called when a new cardAssignment is created.
        /// <br/>created(msls.application.CardAssignment entity)
        /// </field>
        created: [lightSwitchApplication.CardAssignment]
    });

}(msls.application));
