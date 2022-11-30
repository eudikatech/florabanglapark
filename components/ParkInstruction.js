import styles from '../styles/Activities.module.css'

export default function Parkinstruction() {
    return (
      <div id='parkinstruction' className={styles.container}>
          <div className='row py-5 ml-2 justify-content-center'>
          <h1 className='justify-content-center'>Park Instructions</h1>
            <div className='col-md-12 justify-content-center'>
                <ul class="list-group">
                    <li class="list-group-item">1. Ticket is valid for single entry only.</li>
                    <li class="list-group-item">2. Use of professional cameras and drones are not allowed inside the garden.</li>
                    <li class="list-group-item">3. Professional shoots, including engagements, wedding, modeling, TV ads and other events requires prior approval from the management office.</li>
                    <li class="list-group-item">4. Opening and closing timings should be observe strictly.</li>
                    <li class="list-group-item">5. Please use proper passages, walkways and exits allocated for such use.</li>
                    <li class="list-group-item">6. Flower picking is STRICTLY not allowed.</li>
                    <li class="list-group-item">7. Cars, Balls, Scooters, Bicycles, Hover boards, Pets are not allowed.</li>
                    <li class="list-group-item">8. No food and beverages are allowed from outside the garden.</li>
                    <li class="list-group-item">9. Barbeque is not allowed.</li>
                    <li class="list-group-item">10. Use proper litter bins for disposal of litters.</li>
                    <li class="list-group-item">11. Sitting is allowed only in the designated areas.</li>
                    <li class="list-group-item">12. Any instruction from the security personnel should be followed immediately without argument.</li>
                    <li class="list-group-item">13. Professional shoots, including engagements, wedding, modeling, TV ads and other events requires prior approval from the management office.</li>
                    <li class="list-group-item">14. After booking an Event booking money is not refundable opon cancelation.</li>
                    <li class="list-group-item">15. The management has all the rights to expel any visitor from the park if found posing great threats to flowers, park assets or involves in miss conduct.</li>
                </ul>
            </div>
          </div>
      </div>
    )
  }