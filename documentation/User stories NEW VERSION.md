# User stories

<table>
  <thead>
    <tr>
      <td><b>Title:</b> <br>Deleting my devices</td>
      <td><b>Priority:</b> <br> 3/5</td>
      <td><b>Estimate:</b> <br> 4,5h</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="3">
        <b>User Story:</b><br> 
        As a smart home owner,
        I want to get rid of my smart home devices that I'm not using anymore
        so that I can only focus on the ones I am using and keep my dashboard clean.</td>
    </tr>
    <tr>
      <td colspan="3">
        <b>Acceptance Criteria:</b><br>
          <ul>
            <li>The device details contains a delete icon/button</li>
            <li>REST API can delete device in database by id</li>
            <li>User gets "are you sure?" notification</li>
            <li>After deleting device, dashboard automatically updates</li>
            <li>API call is send on delete action</li>
            <li>Device unsubscribes to MQTT topic after delete</li>
          </ul>
        </td>
    </tr>
  </tbody>
</table>

