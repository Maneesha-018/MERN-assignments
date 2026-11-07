# Validation Test Matrix

## Project: Contact Form

### Objective
To test the contact form and verify that it accepts valid inputs and rejects invalid or empty inputs.

### Test Cases

| Test ID | Test Input | Expected Result | Status |
|---|---|---|---|
| TC01 | Valid name, email and message | Form submits successfully | Pass |
| TC02 | Empty name | Form should not submit | Pass |
| TC03 | Empty email | Form should not submit | Pass |
| TC04 | Invalid email format | Browser should show validation error | Pass |
| TC05 | Empty message | Form should not submit | Pass |
| TC06 | All fields filled correctly | Submission summary should appear | Pass |
| TC07 | Submit form | Form fields should become empty | Pass |

### Testing Summary
- Total test cases: 7
- Passed: 7
- Failed: 0

### Conclusion
The contact form was tested with different inputs. It successfully handles valid and invalid data using HTML validation and JavaScript.