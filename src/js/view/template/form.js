const form = () => `
      <div class="form-section">
      <div class="container">
        <div class="row d-flex">
          <div class="col m12 mx-auto">
            <div class="card">
              <form name="locationControls">
                <div class="card-content">
                  <span class="card-title">Card Title</span>
                  <div class="input-field">
                    <input
                      type="text"
                      id="autocomplete-origin"
                      class="autocomplete autocompleteOrigin"
                    />
                    <label for="autocomplete-origin">Origin</label>
                  </div>
                  <div class="input-field">
                    <input
                      type="text"
                      id="autocomplete-destination"
                      class="autocomplete autocompleteDestination"
                    />
                    <label for="autocomplete-destination">Destination</label>
                  </div>
                  <div class="input-field">
                    <input
                      type="text"
                      class="datepicker datepickerDepart"
                      id="datepicker-depart"
                    />
                    <label for="datepicker-depart">Depart date</label>
                  </div>
                  <div class="input-field">
                    <input
                      type="text"
                      class="datepicker datepickerReturn"
                      id="datepicker-return"
                    />
                    <label for="datepicker-return">Return date</label>
                  </div>
                </div>
                <div class="card-action d-flex">
                  <button
                    class="btn waves-effect waves-light purple darken-3"
                    type="button"
                    name="action"
                    id="btnSendAjax"
                  >
                    Search
                    <i class="material-icons right">send</i>
                  </button>
                  <button
                    class="btn waves-effect waves-light pink darken-3 ml-auto"
                    type="reset"
                    name="action"
                    id="reset"
                  >
                    Reset
                    <i class="material-icons right">cancel</i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="tickets-sections">
      <div class="container">
        <div class="row">
          <div id="emptyBasket" class="tickets-empty-res-msg">
            По вашему запросу билетов не найдено.
          </div> 
<!--          <div class="col s12 m6">-->
<!--            <div class="card ticket-card">-->
<!--              <div class="ticket-airline d-flex align-items-center">-->
<!--                <img-->
<!--                  src="http://pics.avs.io/200/200/PS.png"-->
<!--                  class="ticket-airline-img"-->
<!--                />-->
<!--                <span class="ticket-airline-name"-->
<!--                  >Ukraine International airlines</span-->
<!--                >-->
<!--              </div>-->
<!--              <div class="ticket-destination d-flex align-items-center">-->
<!--                <div class="d-flex align-items-center mr-auto">-->
<!--                  <span class="ticket-city">Харьков </span>-->
<!--                  <i class="medium material-icons">flight_takeoff</i>-->
<!--                </div>-->
<!--                <div class="d-flex align-items-center">-->
<!--                  <i class="medium material-icons">flight_land</i>-->
<!--                  <span class="ticket-city">Львов</span>-->
<!--                </div>-->
<!--              </div>-->
<!--              <div class="ticket-time-price d-flex align-items-center">-->
<!--                <span class="ticket-time-departure">14 Sep 2019 02:30</span>-->
<!--                <span class="ticket-price ml-auto">$315</span>-->
<!--              </div>-->
<!--              <div class="ticket-additional-info">-->
<!--                <span class="ticket-transfers">Пересадок: 1</span>-->
<!--                <span class="ticket-flight-number">Номер рейса: 26</span>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div> -->
        </div>
      </div>
    </div>
 `;

export default form;
