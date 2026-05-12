import { test, expect } from '@playwright/test';

test('booking create', async ({ request }) => {
  const response = await request.post('https://restful-booker.herokuapp.com/booking', {
    data: {
      firstname: 'Jim',
      lastname: 'Brown',
      totalprice: 111,
      depositpaid: true,
      bookingdates: {
        checkin: '2018-01-01',
        checkout: '2019-01-01'
      },
      additionalneeds: 'Breakfest'
    },
  });
  expect(response.status()).toBe(200);
  
  const body = await response.json();

  expect(body).toHaveProperty('bookingid');

  });

test('booking get', async ({ request }) => {

    // CREATE BOOKING
    const createResponse = await request.post(
        'https://restful-booker.herokuapp.com/booking',
        {
            data: {
                firstname: 'Jim',
                lastname: 'Brown',
                totalprice: 111,
                depositpaid: true,
                bookingdates: {
                    checkin: '2018-01-01',
                    checkout: '2019-01-01',
                },
                additionalneeds: 'Breakfast',
            },
        }
    );

    expect(createResponse.status()).toBe(200);

    const createBody = await createResponse.json();

    // SAVE ID
    const bookingId = createBody.bookingid;

    // GET BOOKING
    const getResponse = await request.get(
        `https://restful-booker.herokuapp.com/booking/${bookingId}`
    );

    expect(getResponse.status()).toBe(200);

    const getBody = await getResponse.json();

    // VALIDATIONS
    expect(getBody.firstname).toBe('Jim');

    expect(getBody.lastname).toBe('Brown');

    expect(getBody.totalprice).toBe(111);

});

test('booking update', async ({ request }) => {

    // AUTH
    const authResponse = await request.post(
        'https://restful-booker.herokuapp.com/auth',
        {
            data: {
                username: 'admin',
                password: 'password123',
            },
        }
    );

    expect(authResponse.status()).toBe(200);

    const authBody = await authResponse.json();

    const token = authBody.token;

    // CREATE BOOKING
    const createResponse = await request.post(
        'https://restful-booker.herokuapp.com/booking',
        {
            data: {
                firstname: 'Jim',
                lastname: 'Brown',
                totalprice: 111,
                depositpaid: true,
                bookingdates: {
                    checkin: '2018-01-01',
                    checkout: '2019-01-01',
                },
                additionalneeds: 'Breakfast',
            },
        }
    );

    expect(createResponse.status()).toBe(200);

    const createBody = await createResponse.json();

    const bookingId = createBody.bookingid;

    // UPDATE BOOKING
    const updateResponse = await request.put(
        `https://restful-booker.herokuapp.com/booking/${bookingId}`,
        {
            headers: {
                Cookie: `token=${token}`,
            },

            data: {
                firstname: 'James',
                lastname: 'Brown',
                totalprice: 222,
                depositpaid: true,
                bookingdates: {
                    checkin: '2020-01-01',
                    checkout: '2021-01-01',
                },
                additionalneeds: 'Lunch',
            },
        }
    );

    expect(updateResponse.status()).toBe(200);

    const updateBody = await updateResponse.json();

    // VALIDATIONS
    expect(updateBody.firstname).toBe('James');

    expect(updateBody.totalprice).toBe(222);

    expect(updateBody.additionalneeds).toBe('Lunch');

});

test('booking delete', async ({ request }) => {

    // AUTH
    const authResponse = await request.post(
        'https://restful-booker.herokuapp.com/auth',
        {
            data: {
                username: 'admin',
                password: 'password123',
            },
        }
    );

    expect(authResponse.status()).toBe(200);

    const authBody = await authResponse.json();

    const token = authBody.token;

    // CREATE BOOKING
    const createResponse = await request.post(
        'https://restful-booker.herokuapp.com/booking',
        {
            data: {
                firstname: 'Jim',
                lastname: 'Brown',
                totalprice: 111,
                depositpaid: true,
                bookingdates: {
                    checkin: '2018-01-01',
                    checkout: '2019-01-01',
                },
                additionalneeds: 'Breakfast',
            },
        }
    );

    expect(createResponse.status()).toBe(200);

    const createBody = await createResponse.json();

    const bookingId = createBody.bookingid;

    // DELETE BOOKING
    const deleteResponse = await request.delete(
        `https://restful-booker.herokuapp.com/booking/${bookingId}`,
        {
            headers: {
                Cookie: `token=${token}`,
            },
        }
    );

    expect(deleteResponse.status()).toBe(201);

});