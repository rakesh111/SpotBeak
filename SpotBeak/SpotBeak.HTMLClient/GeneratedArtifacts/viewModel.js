/// <reference path="data.js" />

(function (lightSwitchApplication) {

    var $Screen = msls.Screen,
        $defineScreen = msls._defineScreen,
        $DataServiceQuery = msls.DataServiceQuery,
        $toODataString = msls._toODataString,
        $defineShowScreen = msls._defineShowScreen;

    function AddEditCard(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditCard screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Card" type="msls.application.Card">
        /// Gets or sets the card for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditCard.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditCard", parameters);
    }

    function AddEditCardAssignment(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditCardAssignment screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="CardAssignment" type="msls.application.CardAssignment">
        /// Gets or sets the cardAssignment for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditCardAssignment.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditCardAssignment", parameters);
    }

    function AddEditClient(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditClient screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Client" type="msls.application.Client">
        /// Gets or sets the client for this screen.
        /// </field>
        /// <field name="Hubs" type="msls.VisualCollection" elementType="msls.application.Hub">
        /// Gets the hubs for this screen.
        /// </field>
        /// <field name="Spots" type="msls.VisualCollection" elementType="msls.application.Spot">
        /// Gets the spots for this screen.
        /// </field>
        /// <field name="Cards" type="msls.VisualCollection" elementType="msls.application.Card">
        /// Gets the cards for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditClient.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditClient", parameters);
    }

    function AddEditHub(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditHub screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Hub" type="msls.application.Hub">
        /// Gets or sets the hub for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditHub.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditHub", parameters);
    }

    function AddEditSpot(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditSpot screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Spot" type="msls.application.Spot">
        /// Gets or sets the spot for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditSpot.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditSpot", parameters);
    }

    function AddEditSpotAssignment(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditSpotAssignment screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="SpotAssignment" type="msls.application.SpotAssignment">
        /// Gets or sets the spotAssignment for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditSpotAssignment.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditSpotAssignment", parameters);
    }

    msls._addToNamespace("msls.application", {

        AddEditCard: $defineScreen(AddEditCard, [
            { name: "Card", kind: "local", type: lightSwitchApplication.Card }
        ], [
        ]),

        AddEditCardAssignment: $defineScreen(AddEditCardAssignment, [
            { name: "CardAssignment", kind: "local", type: lightSwitchApplication.CardAssignment }
        ], [
        ]),

        AddEditClient: $defineScreen(AddEditClient, [
            { name: "Client", kind: "local", type: lightSwitchApplication.Client },
            {
                name: "Hubs", kind: "collection", elementType: lightSwitchApplication.Hub,
                getNavigationProperty: function () {
                    if (this.owner.Client) {
                        return this.owner.Client.details.properties.Hubs;
                    }
                    return null;
                },
                appendQuery: function () {
                    return this;
                }
            },
            {
                name: "Spots", kind: "collection", elementType: lightSwitchApplication.Spot,
                getNavigationProperty: function () {
                    if (this.owner.Client) {
                        return this.owner.Client.details.properties.Spots;
                    }
                    return null;
                },
                appendQuery: function () {
                    return this;
                }
            },
            {
                name: "Cards", kind: "collection", elementType: lightSwitchApplication.Card,
                getNavigationProperty: function () {
                    if (this.owner.Client) {
                        return this.owner.Client.details.properties.Cards;
                    }
                    return null;
                },
                appendQuery: function () {
                    return this;
                }
            }
        ], [
        ]),

        AddEditHub: $defineScreen(AddEditHub, [
            { name: "Hub", kind: "local", type: lightSwitchApplication.Hub }
        ], [
        ]),

        AddEditSpot: $defineScreen(AddEditSpot, [
            { name: "Spot", kind: "local", type: lightSwitchApplication.Spot }
        ], [
        ]),

        AddEditSpotAssignment: $defineScreen(AddEditSpotAssignment, [
            { name: "SpotAssignment", kind: "local", type: lightSwitchApplication.SpotAssignment }
        ], [
        ]),

        showAddEditCard: $defineShowScreen(function showAddEditCard(Card, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditCard screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditCard", parameters, options);
        }),

        showAddEditCardAssignment: $defineShowScreen(function showAddEditCardAssignment(CardAssignment, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditCardAssignment screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditCardAssignment", parameters, options);
        }),

        showAddEditClient: $defineShowScreen(function showAddEditClient(Client, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditClient screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditClient", parameters, options);
        }),

        showAddEditHub: $defineShowScreen(function showAddEditHub(Hub, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditHub screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditHub", parameters, options);
        }),

        showAddEditSpot: $defineShowScreen(function showAddEditSpot(Spot, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditSpot screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditSpot", parameters, options);
        }),

        showAddEditSpotAssignment: $defineShowScreen(function showAddEditSpotAssignment(SpotAssignment, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditSpotAssignment screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditSpotAssignment", parameters, options);
        })

    });

}(msls.application));
