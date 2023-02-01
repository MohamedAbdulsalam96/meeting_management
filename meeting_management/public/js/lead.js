frappe.ui.form.on('Lead', {
	refresh: function(frm) {
		
			frm.add_custom_button(__("Meeting Schedule"), function() {
				return frappe.call({
					method : "meeting_management.meeting_management.doc_event.lead.make_meetings",
					args: {
						"source_name": frm.doc.name,
						"doctype": 'Lead',
						"ref_doctype": 'Meeting Schedule'
					},
					callback: function(r) {
						if(!r.exc) {
							var doc = frappe.model.sync(r.message);
							frappe.set_route("Form", r.message.doctype, r.message.name);
						}
					}
				})
			}, __("Create"));
			
			frm.add_custom_button(__("Meeting"), function() {
				return frappe.call({
					method : "meeting_management.meeting_management.doc_event.lead.make_meetings",
					args: {
						"source_name": frm.doc.name,
						"doctype": 'Lead',
						"ref_doctype": 'Meeting'
					},
					callback: function(r) {
						if(!r.exc) {
							var doc = frappe.model.sync(r.message);
							frappe.set_route("Form", r.message.doctype, r.message.name);
						}
					}
				})
			}, __("Create"));
		
	},
	// status: function(frm) {
	// 	if (frm.doc.status== "Not Interested" || frm.doc.status== "Do Not Contact" ){
	// 		frm.set_value("contact_by", "");
	// 		frm.set_value("contact_date", "");
	// 	}
	// },

});
