import styles from "@/styles/reservations.module.css";
export default function Reservations() {
  const places = [
    {
      name: "Venice",
      address: "5301 Hazel Ave Orangevale, CA",
      latitude: 38.678,
      longtitude: -121.207,
    },
    {
      name: "Florence",
      address: "2626 Marigold Ln Arden-Arcade, CA",
      latitude: 38.596,
      longtitude: -121.3847,
    },
  ];
  const today = new Date();
  const form = `${today.getFullYear()}-0${
    today.getMonth() + 1
  }-${today.getDate()}`;
  const time = today.toString();
  const now = time.slice(16, 21);
  return (
    <main className={styles.reservations_main}>
      <section className={styles.reservations_intro}>
        <h1>We&#39;re awaiting your arrival in Venice or Florence</h1>
        <div className={styles.reservations_intro_wrap}>
          <div className={styles.reservation_intro_make_res}>
            <h3 className={styles.reservations_title}>Make a reservation</h3>
            <form action="/reservations" id="reservationsForm">
              <select
                name="places"
                id="place"
                className={styles.reservations_select}
                required
              >
                <option value="choose">Select a restaurant</option>
                <option value="venice">{`${places[0].name} - ${places[0].address}`}</option>
                <option value="florence">{`${places[1].name} - ${places[1].address}`}</option>
              </select>
              <input
                type="date"
                defaultValue={form}
                min={form}
                className={styles.reservations_date}
                id="dateInput"
                required
              ></input>
              <select
                name="hour"
                id="time"
                required
                className={styles.reservations_time}
              >
                <option value={"10:00"}>10:00</option>
                <option value={"10:30"}>10:30</option>
                <option value={"11:00"}>11:00</option>
                <option value={"11:30"}>11:30</option>
                <option value={"12:00"}>12:00</option>
                <option value={"12:30"}>12:30</option>
                <option value={"13:00"}>13:00</option>
                <option value={"13:30"}>13:30</option>
                <option value={"14:00"}>14:00</option>
                <option value={"14:30"}>14:30</option>
                <option value={"15:00"}>15:00</option>
                <option value={"15:30"}>15:30</option>
                <option value={"16:00"}>16:00</option>
                <option value={"16:30"}>16:30</option>
                <option value={"17:00"}>17:00</option>
                <option value={"17:30"}>17:30</option>
                <option value={"18:00"}>18:00</option>
                <option value={"18:30"}>18:30</option>
                <option value={"19:00"}>19:00</option>
                <option value={"19:30"}>19:30</option>
              </select>
              <button className={styles.reservations_submit} type="submit">
                Get a table
              </button>
            </form>
          </div>
          <iframe
            src="https://www.google.com/maps/d/u/0/embed?mid=1vNCJfHCeNSFNMLpjDUiu2IqQpLormnM&ehbc=2E312F&z=11"
            width="640"
            height="480"
          ></iframe>
        </div>
      </section>
    </main>
  );
}
