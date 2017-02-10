 Bahmni.ConceptSet.FormConditions.rules = { //This is a constant that Bahmni expects
     'Patient refered from': function(formName, formFieldValues) {
         var conditions = {
             enable: [],
             disable: []
         };
         var patientReferedFrom = formFieldValues['Patient refered from'];
         if (patientReferedFrom == "Other") {
             conditions.enable.push("Other Referred from")
         } else {
             conditions.disable.push("Other Referred from")
         }
         return conditions; //Return object SHOULD be a map with 'enable' and 'disable' arrays having the concept names
     },
     'Signs and Symptoms and OIs': function(formName, formFieldValues) {
         var conditions = {
             enable: [],
             disable: []
         };
         var selectedValues = formFieldValues['Signs and Symptoms and OIs'];

         var found = selectedValues.includes("Other Signs Symptoms")

         if (found) {
             conditions.enable.push("Other Signs Symptoms and OIs")
         } else {
             conditions.disable.push("Other Signs Symptoms and OIs")
         }

         return conditions;
     },
	  'Pregnant Y/N': function(formName, formFieldValues) {
         var edd = "EDD";
         var ancNumber = "ANC number";
         var familyPlanning = "Family Planning";
         var pregnanciesDelivery = "Pregnancies";
		 
         var conditionConcept = formFieldValues['Pregnant Y/N'];
         if (conditionConcept) {
             
				  return {enable: [edd,ancNumber,pregnanciesDelivery], disable: [familyPlanning]}
             
         } else {
            return {disable: [edd,ancNumber,pregnanciesDelivery], enable: [familyPlanning]}
         }
     },
     'ARV Status': function(formName, formFieldValues) {
         var conditions = {
             enable: [],
             disable: []
         };
         var arvStatus = formFieldValues['ARV Status'];

         if (arvStatus == "1 No ARV") {
             conditions.enable.push("ARV Reason - No Start");
             conditions.disable.push("ARV Start");

             conditions.disable.push("ARV Reason - Change or Stop because of TB or Adverse Reaction");
             conditions.disable.push("ARV Reason - Change or Stop because of Treatment Failure");
             conditions.disable.push("ARV Reason - Change or Stop because of Other reasons");

             conditions.disable.push("ARV Regimens");


         } else if (arvStatus == "2 Start ARV") {

             conditions.enable.push("ARV Start");

             conditions.disable.push("ARV Reason - No Start");
             conditions.disable.push("ARV Reason - Change or Stop because of TB or Adverse Reaction");
             conditions.disable.push("ARV Reason - Change or Stop because of Treatment Failure");
             conditions.disable.push("ARV Reason - Change or Stop because of Other reasons");

             conditions.enable.push("ARV Regimens");
         } else if (arvStatus == "3 Continue") {
             conditions.enable.push("ARV Reason - Change or Stop because of TB or Adverse Reaction");
             conditions.enable.push("ARV Reason - Change or Stop because of Treatment Failure");
             conditions.enable.push("ARV Reason - Change or Stop because of Other reasons");

             conditions.disable.push("ARV Start");
             conditions.disable.push("ARV Reason - No Start");

             conditions.enable.push("ARV Regimens");


         } else if (arvStatus == "4 Change") {
             conditions.enable.push("ARV Reason - Change or Stop because of TB or Adverse Reaction");
             conditions.enable.push("ARV Reason - Change or Stop because of Treatment Failure");
             conditions.enable.push("ARV Reason - Change or Stop because of Other reasons");

             conditions.disable.push("ARV Start");
             conditions.disable.push("ARV Reason - No Start");

             conditions.enable.push("ARV Regimens");

         } else if (arvStatus == "5 Stop") {
             conditions.enable.push("ARV Reason - Change or Stop because of TB or Adverse Reaction");
             conditions.enable.push("ARV Reason - Change or Stop because of Treatment Failure");
             conditions.enable.push("ARV Reason - Change or Stop because of Other reasons");

             conditions.disable.push("ARV Start");
             conditions.disable.push("ARV Reason - No Start");


             conditions.disable.push("ARV Regimens");
         } else if (arvStatus == "6 Restart") {
             conditions.enable.push("ARV Start");

             conditions.disable.push("ARV Reason - Change or Stop because of TB or Adverse Reaction");
             conditions.disable.push("ARV Reason - Change or Stop because of Treatment Failure");
             conditions.disable.push("ARV Reason - Change or Stop because of Other reasons");

             conditions.enable.push("ARV Regimens");
         } else if (arvStatus == "7 PMTCT Prophylaxis") {
             conditions.enable.push("ARV Start");
             conditions.disable.push("ARV Reason - No Start");

             conditions.disable.push("ARV Reason - Change or Stop because of TB or Adverse Reaction");
             conditions.disable.push("ARV Reason - Change or Stop because of Treatment Failure");
             conditions.disable.push("ARV Reason - Change or Stop because of Other reasons");

             conditions.enable.push("ARV Regimens");
         } else {

             conditions.disable.push("ARV Reason - Change or Stop because of TB or Adverse Reaction");
             conditions.disable.push("ARV Reason - Change or Stop because of Treatment Failure");
             conditions.disable.push("ARV Reason - Change or Stop because of Other reasons");

             conditions.disable.push("ARV Start");
             conditions.disable.push("ARV Reason - No Start");

             conditions.enable.push("ARV Regimens");
         }
         return conditions; //Return object SHOULD be a map with 'enable' and 'disable' arrays having the concept names
     },
     'ARV Reason - Change or Stop because of Other reasons': function(formName, formFieldValues) {
         var conditions = {
             enable: [],
             disable: []
         };
         var arvReason = formFieldValues['ARV Reason - Change or Stop because of Other reasons'];

         if (arvReason == "149 - Other reason specify") {
             conditions.enable.push("ARV Specify other reason");

         } else {
             conditions.disable.push("ARV Specify other reason");
         }
         return conditions; //Return object SHOULD be a map with 'enable' and 'disable' arrays having the concept names
     },
     'ARV Adherence status': function(formName, formFieldValues) {
         var conditions = {
             enable: [],
             disable: []
         };
         var arvAdherencestatus = formFieldValues['ARV Adherence status'];

         if (arvAdherencestatus == "2 P(Poor) - 2 or more missed days") {
             conditions.enable.push("Reasons for poor ARV adherence");

         } else {
             conditions.disable.push("Reasons for poor ARV adherence");
         }
         return conditions; //Return object SHOULD be a map with 'enable' and 'disable' arrays having the concept names
     },
     'Reasons for poor ARV adherence': function(formName, formFieldValues) {
         var conditions = {
             enable: [],
             disable: []
         };
         var poorARVAdherence = formFieldValues['Reasons for poor ARV adherence'];

         if (poorARVAdherence == "13 - Other (Specify)") {
             conditions.enable.push("Other Reasons for poor ARV adherence");

         } else {
             conditions.disable.push("Other Reasons for poor ARV adherence");
         }
         return conditions; //Return object SHOULD be a map with 'enable' and 'disable' arrays having the concept names
     },
     'Referral to': function(formName, formFieldValues) {
         var conditions = {
             enable: [],
             disable: []
         };
         var referralTo = formFieldValues['Referral to'];

         if (referralTo == "10 - Other") {
             conditions.enable.push("Other Referral to");

         } else {
             conditions.disable.push("Other Referral to");
         }
         return conditions; //Return object SHOULD be a map with 'enable' and 'disable' arrays having the concept names
     },

     'ARV Regimens - First Line Adult': function(formName, formFieldValues) {
         var firstLineAdult = "ARV Regimens - First Line Adult";
         var secondLineAdult = "ARV Regimens - Second Line Adult";
         var firstLinePediatric = "ARV Regimens - First Line Pediatric";
         var secondLinePediatric = "ARV Regimens - Second Line Pediatric";
         var conditionConcept = formFieldValues['ARV Regimens - First Line Adult'];
         if (conditionConcept != null) {
             return {
                 disable: [secondLineAdult, firstLinePediatric, secondLinePediatric]
             }
         } else {
             return {
                 enable: [secondLineAdult, firstLinePediatric, secondLinePediatric]
             }
         }
     },

     'Has infant ever had a health problem?': function(formName, formFieldValues) {
  
         var problems = "What problem has infant had?";
         var conditionConcept = formFieldValues['Has infant ever had a health problem?'];
         if (conditionConcept =="Yes new problems") {
             return {
                
               enable: [problems]
             }
         } else {
             return {
              disable: [problems]
             }
         }
     },

     'What problem has infant had?': function(formName, formFieldValues) {
  
         var problems = "Other HEI Problems";
         var conditionConcept = formFieldValues['What problem has infant had?'];
         if (conditionConcept =="Other") {
             return {
                
               enable: [problems]
             }
         } else {
             return {
              disable: [problems]
             }
         }
     },

     'Infant status': function(formName, formFieldValues) {
  
         var ctcno = "Child's own CTC Number";
         var conditionConcept = formFieldValues['Infant status'];
         if (conditionConcept =="Confirmed HIV Positive") {
             return {
                
               enable: [ctcno]
             }
         } else {
             return {
              disable: [ctcno]
             }
         }
     },

     'Community Support Organisation': function(formName, formFieldValues) {
  
         var org = "Name of Community Support Organisation";
         var conditionConcept = formFieldValues['Community Support Organisation'];
         if (conditionConcept ) {
             return {
                
               enable: [org]
             }
         } else {
             return {
              disable: [org]
             }
         }
     }
	 ,

     'VisitTypeCode': function(formName, formFieldValues) {
  
         var weight = "Weight (Kilograms)";
		 var lenght = "Length/ height (in cm) (<15 yrs)";
         var conditionConcept = formFieldValues['VisitTypeCode'];
		 console.log(conditionConcept);
         if (conditionConcept=="TS-Treatment supp" ) {
             return {
                
               disable: [weight,lenght]
             }
         } else {
             return {
              enable: [weight,lenght]
             }
         }
     }
	 ,

     'HTC, Tested before': function(formName, formFieldValues) {
  
         var result = "HTC, Result if tested";

         var conditionConcept = formFieldValues['HTC, Tested before'];
		
         if (conditionConcept) {
             return {
                
               enable: [result]
             }
         } else {
             return {
              disable: [result]
             }
         }
     }
 ,

     'HTC, Referred From': function(formName, formFieldValues) {
  
         var other = "HTC, Other Referred From";

         var conditionConcept = formFieldValues['HTC, Referred From'];
		
         if (conditionConcept=="HTC, Referred From Other") {
             return {
                
               enable: [other]
             }
         } else {
             return {
              disable: [other]
             }
         }
     }
	  ,

     'HTC, Risk Group': function(formName, formFieldValues) {
  
         var other = "HTC, Other Risk Group";

         var conditionConcept = formFieldValues['HTC, Risk Group'];
		
         if (conditionConcept=="Others") {
             return {
                
               enable: [other]
             }
         } else {
             return {
              disable: [other]
             }
         }
     }
	  ,

     'HTC, Disclosure To': function(formName, formFieldValues) {
  
         var other = "HTC, Other Disclosure To Specify";

         var conditionConcept = formFieldValues['HTC, Disclosure To'];
		
         if (conditionConcept=="HTC, Other Disclosure To") {
             return {
                
               enable: [other]
             }
         } else {
             return {
              disable: [other]
             }
         }
     }






 }