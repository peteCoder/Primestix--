# Additional API Endpoints:

# User sending Email
## `/api/customer`
## POST Request

Body data:
```javascript
{
    initials: "string",
    firstName: "string",
    lastName: "string",
    phone: "string",
    email: "string",
    newsletterConfirmation: "boolean", // true or false
    message: "string",
    subject: "subject",
}
```

Response data:
You will get either of the following:

```javascript
{ message: "Message was sent successful." },
```

OR

```javascript
{ message: "Message was not submitted successful. Try again." },
```
# User sending Newsletter
## `/api/newsletter`
## POST Request
Send the user email to this above route

It will automaticatically create the newsletter email in the backend.

```javascript
{
    email: "string"
}

```

Response data:
You will get either of the following:

```javascript
{ message: "Message was sent successful." }

```

OR 

```javascript
{ message: "Message was not submitted successful. Try again." }
```


# Retrieving Team Data
## `/api/team`
## GET Request

Response data:
You will get either of the following:

```javascript
 { message: "Message was sent successful." }
```

OR

```javascript
{ message: "Message was not submitted successful. Try again." }
```

