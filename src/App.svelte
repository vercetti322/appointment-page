<script>
  import { formInfo } from './Store';

  let name = '',
    email = '',
    phone = '',
    preferredDate = '',
    preferredTime = '',
    appointmentReason = '',
    consent = false;
  
  let data;

  const handleSubmit = async () => {
    // Create the object from form fields
    if (consent === true) {
      data = {
        fullName: name,
        emailAddress: email,
        phoneNumber: phone,
        preferredDate: preferredDate,
        preferredTime: preferredTime,
        appointmentReason: appointmentReason
      };
    }

    // Set the formInfo store
    formInfo.set(data);

    // Check if all fields are non-empty
    if (checkForm(data)) {
      await updateDate();
    } else {
      console.warn('Please fill out all fields.');
    }
  };

  const updateDate = async () => {
    const url = 'http://localhost:8090/form';
    try {
        console.log('Sending data:', data); 
        const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(data), // Use $formInfo for the current store value
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      console.log('Success:', result);
    } catch (error) {
      console.error('Error: ', error);
    }
  };

  const checkForm = (data) => {
    return Object.values(data).every(value => value !== '' && value !== null && value !== undefined);
  };
</script>

<main>
  <div class="form-container">
    <form on:submit|preventDefault={handleSubmit}>
      <div
        class="form-header"
        style="display: flex; justify-content: center; flex-direction: column; align-items: center; margin-top: -7.5px"
      >
        <h1 style="margin-bottom: -4px; color: #09677E; margin-top: 0">
          BeKind 💚
        </h1>
        <p style="font-weight: 600;">
          Fill the form 📝 below to get your first appointment
        </p>
        <p
          style="font-size: 12px; margin-top: 0; color: #044757; font-weight: 800"
        >
          ⚠️ All fields are mandatory
        </p>
      </div>
      <div class="form-group">
        <label for="name">Full Name 🖊️</label>
        <input id="name" bind:value={name} type="text" required />
      </div>

      <div class="form-group">
        <label for="email">Email Address 📧</label>
        <input id="email" bind:value={email} type="email" required />
      </div>

      <div class="form-group">
        <label for="phone">Phone Number 📱</label>
        <input id="phone" bind:value={phone} type="tel" required />
      </div>

      <div class="form-group">
        <label for="preferredDate">Preferred Date 📅</label>
        <input
          id="preferredDate"
          bind:value={preferredDate}
          type="date"
          required
        />
      </div>

      <div class="form-group">
        <label for="preferredTime">Preferred Time ⏰</label>
        <input
          id="preferredTime"
          bind:value={preferredTime}
          type="time"
          required
        />
      </div>

      <div class="form-group">
        <label for="reasonForAppointment">Reason for Appointment 💬</label>
        <textarea
          id="reasonForAppointment"
          bind:value={appointmentReason}
          rows="4"
          required
        ></textarea>
      </div>

      <div class="form-group">
        <label>
          <input
            id="consentToTreatment"
            type="checkbox"
            bind:checked={consent}
            required
          />
          I consent to treatment 😊
        </label>
      </div>

      <div class="form-group">
        <input type="submit" value="Submit" />
      </div>
    </form>
  </div>
</main>

<style>
  .form-container {
    margin-top: 70px;
    margin-bottom: 70px;
    margin-left: 175px;
    max-width: 600px;
    padding: 30px;
    border: 1px solid white;
    border-radius: 8px;
    color: #044757;
    background-color: white;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
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

  .form-group input[type='checkbox'] {
    width: auto;
    margin-right: 10px;
  }

  .form-group input[type='submit'] {
    background-color: #09677e;
    color: #fff;
    border: none;
    padding: 10px 15px;
    border-radius: 4px;
    cursor: pointer;
  }

  .form-group input[type='submit']:hover {
    background-color: #044757;
  }
</style>
