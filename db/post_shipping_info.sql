insert into shipping_addresses (ref_id, first_name, last_name, user_id, address1, address2, city, state, zip_code, email, phone) values
(${ref_id},${first_name},${last_name},${user_id},${address1},${address2},${city},${state},${zip_code},${email},${phone});
select * from shipping_addresses where ref_id = ${ref_id};