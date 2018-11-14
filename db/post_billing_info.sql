insert into billing_addresses (ref_id, first_name, last_name, user_id, address1, address2, city, state, zip_code) values
(${ref_id}, ${first_name}, ${last_name}, ${user_id}, ${address1}, ${address2}, ${city}, ${state}, ${zip_code});
select * from billing_addresses where ref_id = ${ref_id};
