const select = () => `
     <br>
     <div class="container">    
      <div class="input-field col s12 select-custom">
        <select id="currency">
          <option value="" disabled selected>Пусто</option>
          <option value="1">$ US Dollar</option>
          <option value="2">€ Euro</option>
        </select>
        <label>Валюта</label>
      </div>
     </div>
     <br>
    `;

export default select;
