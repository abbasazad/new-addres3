export default {
  "entity": {
    "email_send_subject": "",
    "email_send_message": "",
    "sub_domain": "",
    "custom_domain": "",
    "entity_id": "123123"
  },
  "document": {
    "id": "123123123123",
    "name": "name test 01",
    "value": 0,
    "type": "sales",
    "tags": "",
    "external_id": "",
    "external_client_id": "api",
    "external_editor_type": "",
    "external_editor_id": "",
    "company_name": "",
    "company_number": "",
    "company_id": "",
    "company_logo_url": "",
    "unique_id": 0,
    "is_selfsign": true,
    "is_signing_biometric": true,
    "is_signing_initials": false,
    "is_signing_forward": true,
    "is_identify_recipient": false,
    "is_private": false,
    "status": "viewed",
    "send_date": "2023-09-12T15:13:23+00:00",
    "sign_date": null,
    "created_at": "2023-09-12T15:12:06+00:00",
    "user_id": "",
    "sender_name": "John Doe",
    "sender_thumb_url": "",
    "sender_email": "sender@email.com",
    "email_send_template_id": "123123",
    "parent_id": "123123123123",
    "email_send_subject": "{{sender.first_name}} sent you {{document.name}} to review",
    "email_send_message": "Hi {{recipient.first_name}}, \n\nYou have been sent a document to review. \n\nClick the link below to review the document. \n\nBest regards, \n{{sender.fullname}}",
    "is_signing": true,
    "is_signing_order": false,
    "is_signed": false,
    "expiration_date": "2023-09-27T04:59:00+00:00",
    "is_scheduled_sending": false,
    "scheduled_sending_time": null,
    "is_reminder_sending": true,
    "is_video": false,
    "video_id": null,
    "is_auto_comment": true,
    "auto_comment_text": "",
    "is_auto_comment_email": true,
    "auto_comment_email": "",
    "entity_auto_comment_text": "",
    "entity_auto_comment_email": "",
    "field_count": 4,
    "contract_start_date": null,
    "contract_end_date": null,
    "thumb_url": "https://media.getaccept.com/preview/123123/123123123.png",
    "preview_url": "https://app.getaccept.com/v/preview/123123123?token=eyJ0eXAqAS34QiLCJhbGciOiJIUz123NiJ9.eyJkYXRhIjp7ImRhdGFjZW5055sqrZCI6ImR3OG5rZ254IiwiZW50aXR5SWQiOiIybmR4Nzk2biIsImRvY3VtZW50SWQiOiJqeDQ4ZWZ2amtlamsiLCJ1c2VySWQiOiJwNWdyenprcCIsImF1dGhJZCI6ImVlM2VjZTFiZDVjMjExMDQ0OTU3MWVhYWI3NGYzMDc2IiwiYXdzcmVnaW9uIjoidXMtd2VzdC0XMtd2VzdC0yIn0sImlhdCqNQvxvUbid3Bmlk",
    "download_url": "https://ga-us-west-2.s3.us-west-2.amazonaws.com/123123/original/123123123.pdf?X-Amzn-Trace-Id=Root%3D1-6500802d-127dc56c51d64ae22f1106fb%3BParent%3De058393b299b6bb6%3BSampled%3D1&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIB4Ik8mdaPpZ%2FcvSzQr9Dev3CSCSJSI3YlG8uojSUcOJAiEA6i2F6cMm5f099cLO0T%2BKHycTfKp%2FABxrYXxlKYmwzDrapn2eASkUTEUuB5%2BugQRoh9JKCjzLg7Zmm%2BI3aQTwcOC5sJXCinb4Dc3ovki22hJk4zDzWl%2FnwlDL%2B0IEqGyQK0iHMeE7%2BU0Ou7yyiQlZuEIf5xshl1qNTC6oSp0KfmUJ6BzQ4v4Eg0ppNEHO0f9fPWrANY3i8bRIzQY02iDHe59ViKKiXeEGFx5vz5y0AuSNDdwuvawI3JmePZY96eMlJJM83CcK5TiKlv7q1OICssbsoIjiLKeZ6FPUTIo4OVrbm6xTaMvcbGZSx8lqVzzzlDMyW"
  },
  "recipient": {
    "fullname": "Full name",
    "first_name": "First",
    "last_name": "Last",
    "email": "email@test.com",
    "title": "",
    "note": "",
    "gender": "",
    "mobile": "",
    "thumb_url": "",
    "role": "signer",
    "company_name": "",
    "company_number": "",
    "status": "viewed",
    "order_num": "1"
  },
  "custom_fields": {
    "1": "recipient.fullname",
    "": "sender.fullname",
    "": "sender"
  },
  "event": "document.viewed",
  "event_type": "document",
  "event_action": "viewed",
  "subscription_id": "123123123"
}