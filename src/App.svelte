<script>
	let name = '';
	let email = '';
	let phone = '';
	let preferredDate = '';
	let preferredTime = '';
	let reasonForAppointment = '';
	let consentToTreatment = false;
  
	const handleSubmit = () => {
	  // Handle form submission logic here
	  console.log({
		name,
		email,
		phone,
		preferredDate,
		preferredTime,
		reasonForAppointment,
		consentToTreatment
	  });
	}
  </script>
  
  <style>
	.form-container {
	  max-width: 600px;
	  margin: 0 auto;
	  padding: 20px;
	  border: 1px solid #ddd;
	  border-radius: 8px;
	  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
	}
  
	.form-group {
	  margin-bottom: 15px;
	}
  
	.form-group label {
	  display: block;
	  margin-bottom: 5px;
	  font-weight: bold;
	}
  
	.form-group input,
	.form-group textarea {
	  width: 100%;
	  padding: 8px;
	  border: 1px solid #ccc;
	  border-radius: 4px;
	}
  
	.form-group input[type="checkbox"] {
	  width: auto;
	  margin-right: 10px;
	}
  
	.form-group input[type="submit"] {
	  background-color: #007bff;
	  color: #fff;
	  border: none;
	  padding: 10px 15px;
	  border-radius: 4px;
	  cursor: pointer;
	}
  
	.form-group input[type="submit"]:hover {
	  background-color: #0056b3;
	}
  </style>
  
  <div class="form-container">
	<form on:submit|preventDefault={handleSubmit}>
	  <div class="form-group">
		<label for="name">Full Name:</label>
		<input id="name" bind:value={name} type="text" required />
	  </div>
  
	  <div class="form-group">
		<label for="email">Email Address:</label>
		<input id="email" bind:value={email} type="email" required />
	  </div>
  
	  <div class="form-group">
		<label for="phone">Phone Number:</label>
		<input id="phone" bind:value={phone} type="tel" required />
	  </div>
  
	  <div class="form-group">
		<label for="preferredDate">Preferred Date:</label>
		<input id="preferredDate" bind:value={preferredDate} type="date" required />
	  </div>
  
	  <div class="form-group">
		<label for="preferredTime">Preferred Time:</label>
		<input id="preferredTime" bind:value={preferredTime} type="time" required />
	  </div>
  
	  <div class="form-group">
		<label for="reasonForAppointment">Reason for Appointment:</label>
		<textarea id="reasonForAppointment" bind:value={reasonForAppointment} rows="4" required></textarea>
	  </div>
  
	  <div class="form-group">
		<label>
		  <input id="consentToTreatment" type="checkbox" bind:checked={consentToTreatment} />
		  I consent to treatment
		</label>
	  </div>
  
	  <div class="form-group">
		<input type="submit" value="Submit" />
	  </div>
	</form>
  </div>
  