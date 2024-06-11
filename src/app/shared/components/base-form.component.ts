import {FormGroup} from "@angular/forms";

/**
 * Base class for form components
 * @class BaseFormComponent
 * @summary
 * This class provides common methods for form components.
 * It provides methods to check if a control is invalid and to get error messages for a control.
 */
export class BaseFormComponent {

  /**
   * Check if a control is invalid
   * @method isInvalidControl
   * @param {FormGroup} form - The form group
   * @param {string} controlName - The name of the control
   * @returns {boolean} - Returns true if the control is invalid
   * @protected
   */
  protected isInvalidControl(form: FormGroup, controlName: string) {
    return form.controls[controlName].invalid && form.controls[controlName].touched;
  }

  /**
   * Get error message for a control
   * @method errorMessageForControl
   * @param {string} controlName - The name of the control
   * @param {string} errorKey - The error key
   * @returns {string} - Returns the error message for the control
   * @protected
   */
  private errorMessageForControl(controlName: string, errorKey: string) {
    switch (errorKey) {
      case 'required':
        return `The field ${controlName} is required`;
      default:
        return `The field ${controlName} is invalid`;
    }
  }

  /**
   * Get error messages for a control
   * @method errorMessagesForControl
   * @param {FormGroup} form - The form group
   * @param {string} controlName - The name of the control
   * @returns {string} - Returns the error messages for the control
   * @protected
   */
  protected errorMessagesForControl(form: FormGroup, controlName: string) {
    const control = form.controls[controlName];
    let errorMessages = "";
    let errors = control.errors;
    if (!errors) return errorMessages;
    Object.keys(errors).forEach(errorKey => {
      errorMessages += this.errorMessageForControl(controlName, errorKey);
    });
    return errorMessages;
  }
}
