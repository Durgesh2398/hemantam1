import React from 'react';
 
import "react-datepicker/dist/react-datepicker.css";

function RegisterUser() {
    return (
        <div className="form_container">
            <h1>Registration Form</h1>
            <div class="form_description">
				<h2>Untitled Form</h2>
				<p>This is your form description. Click here to edit.</p>
			</div>
			<ul>
            <li id="li_1">
					<label class="description" for="element_1">Name </label>
					<span>
						<input id="element_1_1" name="element_1_1" class="element text" maxlength="255" size="8"
							value="" />
						<label>First</label>
					</span>
					<span>
						<input id="element_1_2" name="element_1_2" class="element text" maxlength="255" size="14"
							value="" />
						<label>Last</label>
					</span>
					
				</li>
            </ul>
        </div>
    );
}

export default RegisterUser;
