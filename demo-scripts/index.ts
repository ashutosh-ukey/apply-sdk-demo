import * as dotenv from 'dotenv';
import uuid4 from "uuid4";

import { CardsApi } from "circle-nodejs-sdk";
import { CardCreationRequest, BillingDetails, MetadataCardAndAch } from "circle-nodejs-sdk";

dotenv.config();

/* Initializing API driver */
const baseUrl = 'http://api-sandbox.circle.com';

const cardsApiDriver = new CardsApi(baseUrl);
cardsApiDriver.accessToken = process.env.BEARER_TOKEN!;


// Create card details
const mockEncryptData = "LS0tLS1CRUdJTiBQR1AgTUVTU0FHRS0tLS0tCgp3Y0JNQTBYV1NGbEZScFZoQVFmL2J2bVVkNG5LZ3dkbExKVTlEdEFEK0p5c0VOTUxuOUlRUWVGWnZJUWEKMGgzQklpRFNRU0RMZmI0NEs2SXZMeTZRbm54bmFLcWx0MjNUSmtPd2hGWFIrdnNSMU5IbnVHN0lUNWJECmZzeVdleXlNK1JLNUVHV0thZ3NmQ2tWamh2NGloY29xUnlTTGtJbWVmRzVaR0tMRkJTTTBsTFNPWFRURQpiMy91eU1zMVJNb3ZiclNvbXkxa3BybzUveWxabWVtV2ZsU1pWQlhNcTc1dGc1YjVSRVIraXM5ckc0cS8KMXl0M0FOYXA3UDhKekFhZVlyTnVNZGhGZFhvK0NFMC9CQnN3L0NIZXdhTDk4SmRVUEV0NjA5WFRHTG9kCjZtamY0YUtMQ01xd0RFMkNVb3dPdE8vMzVIMitnVDZKS3FoMmtjQUQyaXFlb3luNWcralRHaFNyd3NKWgpIdEphQWVZZXpGQUVOaFo3Q01IOGNsdnhZVWNORnJuNXlMRXVGTkwwZkczZy95S3loclhxQ0o3UFo5b3UKMFVxQjkzQURKWDlJZjRBeVQ2bU9MZm9wUytpT2lLall4bG1NLzhlVWc3OGp1OVJ5T1BXelhyTzdLWTNHClFSWm8KPXc1dEYKLS0tLS1FTkQgUEdQIE1FU1NBR0UtLS0tLQo";
const newCardBilling: BillingDetails = {
    name: 'John Doe',
    city: 'Chicago',
    country: 'US',
    line1: '123 MoneyStreet',
    postalCode: '99999'
};
const newCardMetaData: MetadataCardAndAch = {
    email: "john@circle.com",
    sessionId: "DE6FA86F60BB47B379307F851E238617",
    ipAddress: "244.28.239.130",
}
const newCardReq: CardCreationRequest = {
    idempotencyKey: "ba943ff1-ca16-49b2-ba55-1057e70ca5c2",
    encryptedData: mockEncryptData,
    expMonth: 7,
    billingDetails: newCardBilling,
    expYear: 2028,
    metadata: newCardMetaData,
};


// Sending and logging API requests
(async function main() {
    const getResponse = await cardsApiDriver.getCards();
    console.log(getResponse.body.data);

    // Create API request not succeeding for some reason (even in Postman)
    // const createResponse = await cardsApiDriver.createCard(newCardReq);
    // console.log(createResponse.body.data);
})();