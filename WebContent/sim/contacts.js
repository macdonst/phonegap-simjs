addService("Contacts", function() {
  
            var phones = [];
            var emails = [];
            var ims = [];
            var photos = [];
            var categories = [];
            var urls = [];
            var orgs = [];
            var addresses = [];
            
            this.getContactData = function() {
            	var contact = new Object();
            	
            	contact.id = document.getElementById("contactid").value;
            	contact.displayName = document.getElementById("displayname").value;
            	contact.birthday = document.getElementById("birthday").value;
            	contact.note = document.getElementById("note").value;
            	contact.nickname = document.getElementById("nickname").value;
            	
            	// Contact Name
            	contact.name = new Object();
            	contact.formatted = document.getElementById("nameformatted").value;
            	contact.familyName = document.getElementById("namefamily").value;
            	contact.givenName = document.getElementById("namegiven").value;
            	contact.middleName = document.getElementById("namemiddle").value;
            	contact.honorificPrefix = document.getElementById("nameprefix").value;
            	contact.honorificSuffix = document.getElementById("namesuffix").value;
            	
            	return contact;
            }            
            
            var fieldDlg, addressDlg, orgDlg;
            dojo.addOnLoad(function() {
                fieldDlg = dijit.byId("fieldDialog");
        		dojo.connect(dijit.byId("fieldBtn"), "onClick", fieldDlg, "show");

                addressDlg = dijit.byId("addressDialog");
        		dojo.connect(dijit.byId("addressBtn"), "onClick", addressDlg, "show");

                orgDlg = dijit.byId("orgDialog");
				dojo.connect(dijit.byId("orgBtn"), "onClick", orgDlg, "show");
            });
            
            this.addField = function () {
            	console.log("I'm in addField()");
            	var field = new Object();
            	var fieldType = document.getElementById('field').options[document.getElementById('field').selectedIndex].value;
            	
            	field.type = document.getElementById('type').options[document.getElementById('type').selectedIndex].value;
            	field.value = document.getElementById("value").value;
            	field.pref = document.getElementById('pref').options[document.getElementById('pref').selectedIndex].value;
            	
            	if (fieldType == "phone") {
            		phones.push(field);
            	} else if (fieldType == "email") {
            		emails.push(field);
            	} else if (fieldType == "im") {
            		ims.push(field);
            	} else if (fieldType == "photo") {
            		photos.push(field);
            	} else if (fieldType == "category") {
            		categories.push(field);
            	} else if (fieldType == "url") {
            		urls.push(field);
            	}
            }
            
            this.addOrg= function() {
            	console.log("I'm in addOrg()");
            	var org = new Object();
            	
            	org.type = document.getElementById('orgtype').options[document.getElementById('orgtype').selectedIndex].value;
            	org.name = document.getElementById("orgname").value;
            	org.department = document.getElementById("orgdept").value;
            	org.title = document.getElementById("orgtitle").value;
            	org.pref = document.getElementById('orgpref').options[document.getElementById('orgpref').selectedIndex].value;

          		orgs.push(org);
            }
            
            this.addAddress = function() {
            	console.log("I'm in addAddress()");
            	var address = new Object();
            	
            	address.type = document.getElementById('addtype').options[document.getElementById('addtype').selectedIndex].value;
            	address.formatted = document.getElementById("addformatted").value;
            	address.streetAddress = document.getElementById("addstreet").value;
            	address.locality = document.getElementById("addlocality").value;
            	address.region = document.getElementById("addregion").value;
            	address.postalCode = document.getElementById("addpostal").value;
            	address.country = document.getElementById("addcountry").value;
            	address.pref = document.getElementById('addpref').options[document.getElementById('addpref').selectedIndex].value;

          		addresses.push(address);
            }

	// Public
	// Handle requests 
	this.exec = function(action, args, callbackId) {
		console.log("Contacts."+action+"()");
		alert("Contacts API not implemented yet");
		return new PluginResult(callbackId, PluginResultStatus.OK, "NOT IMPLEMENTED", false);
		//return new PluginResult(callbackId, PluginResultStatus.INVALID_ACTION);
	};

	// Initialization 
	{
   
	}
});
