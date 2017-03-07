select distinct concat(pn.given_name," ", pn.family_name) as name,
  pi.identifier as identifier,
pg.name  as pgname,
pp.date_enrolled,
  p.gender as gender,
 DATE( p.birthdate) as dob,
 DATE( p.date_created )as create_date ,
  pa.address2 as village,
  pa.address4 as district,
  pa.address5 as region
  from
    person_name pn
    join patient_identifier pi on pn.person_id = pi.patient_id and pi.voided=0
    join person_address pa on pa.person_id = pn.person_id and pa.voided=0
    join patient_identifier_type pit on pi.identifier_type = pit.patient_identifier_type_id
	join patient_program pp on pn.person_id=pp.patient_id
    join program pg on pp.program_id=pg.program_id and pg.name='CTC2'
    join global_property gp on gp.property="emr.primaryIdentifierType" and gp.property_value=pit.uuid
    join person p on p.person_id = pn.person_id and p.voided=0
order by
pn.date_created desc