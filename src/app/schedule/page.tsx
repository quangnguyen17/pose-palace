import type { FC } from 'react'

const Schedule: FC = () => {
  return (
    <div className="form">
      <p>Schedule appointment:</p>
      <div className="button-group">
        <button className="button-outlined">Pose Room</button>
        <button className="button-outlined">Recording Room</button>
      </div>
      <div className="form-row">
        <label htmlFor="date">Select a date:</label>
        <input id="date" type="date" placeholder="Select a date" />
      </div>
      <div className="form-row">
        <label htmlFor="time">Select an available time:</label>
        <select name="time">
          <option value="7:00">7:00 AM</option>
          <option value="8:00">8:00 AM</option>
          <option value="9:00">9:00 AM</option>
          <option value="10:00">10:00 AM</option>
          <option value="11:00">11:00 AM</option>
        </select>
      </div>
      <input type="text" placeholder="First Name" />
      <input type="text" placeholder="Last Name" />
      <input type="email" placeholder="Email" />
      <div className="form-row">
        <span>Amount Due:</span>
        <span>$100</span>
      </div>
      <div className="divider" />
      <p>Select a payment method</p>
      <div className="button-group">
        <button className="button-default">Credit Card</button>
        <button className="button-default">Apple Pay</button>
        <button className="button-default">Google Pay</button>
      </div>
      <div className="form-terms">
        <input type="checkbox" id="terms" name="terms" value="terms" />
        <label htmlFor="terms"> Agree to our terms and service agreements</label>
      </div>
      <button className="button-primary">Schedule</button>
    </div>
  )
}

export default Schedule
