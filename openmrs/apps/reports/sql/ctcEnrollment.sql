select distinct
  pi.identifier as EMRID,
  ppa.value_reference as CTCID,
  pp.date_enrolled as ENROLLED,
  DATE( p.birthdate) as DOB,
  p.gender as GENDER,
  pa.address2 as VILLAGE,
  pa.address4 as DISTRICT,
  pa.address5 as REGION
  from
    person_name pn
    join patient_identifier pi on pn.person_id = pi.patient_id and pi.voided=0
    join person_address pa on pa.person_id = pn.person_id and pa.voided=0
    join patient_identifier_type pit on pi.identifier_type = pit.patient_identifier_type_id
	join patient_program pp on pn.person_id=pp.patient_id
    join patient_program_attribute ppa on pp.patient_program_id=ppa.patient_program_id and ppa.attribute_type_id=1
    join program pg on pp.program_id=pg.program_id and pg.name='CTC2'
    join global_property gp on gp.property="emr.primaryIdentifierType" and gp.property_value=pit.uuid
    join person p on p.person_id = pn.person_id and p.voided=0
order by
pn.date_created desc