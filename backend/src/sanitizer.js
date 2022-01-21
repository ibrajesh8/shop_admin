import Ajv from 'ajv'; // json schema validation library
import { uuid } from './utils.js'; // common utility function module
import { readFile } from 'fs/promises'; 


// import all schema files
const schemas = JSON.parse(await readFile(process.cwd()+"/schemas/schema.json"));
const ajv = new Ajv();

/**
 * Validate data against schema
 * @param {Object} data 
 * @param {Object} schema 
 * @returns {Boolean}
 */
function validate(data, schema) {
    const validate = ajv.compile(schema);
    const valid = validate(data);
    if(valid){
        // console.log("valid");
        return true;
    }else{
        // console.log("invalid");
        return false;
    }
}

/**
 * Validate new customer data
 * @param {Object} data 
 * @returns {Boolean}
 */
function validate_customer_data(data) {
    return validate(data, schemas.customer_schema);
}

/**
 * Validate new purchase data
 * @param {Object} data 
 * @returns 
 */
function validate_purchase_data(data){
    return validate(data, schemas.purchase_schema);
}

/**
 * Validate new address data
 * @param {Object} data 
 * @returns {Boolean}
 */
function validate_address_data(data){
    return validate(data, schemas.address_schema);
}

/**
 * Validate New shipping data
 * @param {Object} data 
 * @returns 
 */
function validate_shipping_data(data){
    return validate(data, schemas.shipping_schema);
}

export { validate_address_data, validate_customer_data, validate_purchase_data, validate_shipping_data };