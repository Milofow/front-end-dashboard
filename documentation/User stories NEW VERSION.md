# User stories

<table>
  <thead>
    <tr>
      <td><b>Title:</b> <br>1. Deleting my devices</td>
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

<br>

<table>
  <thead>
    <tr>
      <td><b>Title:</b> <br>1. Deleting my devices</td>
      <td><b>Priority:</b> <br> 3/5</td>
      <td><b>Estimate:</b> <br> 4,5h</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="3">
        <b>User Story:</b><br> 
        <b>As</b> a smart home owner, <br>
        <b>I want</b> to get rid of my smart home devices that I'm not using anymore <br>
        <b>so that</b> I can keep my dashboard clear</td>
    </tr>
    <tr>
      <td colspan="3">
        <b>Acceptance Criteria:</b><br>
          <ul>
            <li>I can navigate to the device details and delete my device from there</li>
            <li>When I try to delete a device I will be notified if I'm really sure and make my final decision</li>
            <li>After I delete a device my dashboard automatically updates</li>
          </ul>
        </td>
    </tr>
  </tbody>
</table>

<table>
  <thead>
    <tr>
      <td><b>Title:</b> <br>2. Overview of my devices</td>
      <td><b>Priority:</b> <br> 5/5</td>
      <td><b>Estimate:</b> <br> 3h</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="3">
        <b>User Story:</b><br> 
        <b>As</b> a smart home owner, <br>
        <b>I want</b> to see all my devices grouped together on a dashboard, <br>
        <b>so that</b> I can control them more easily.</td>
    </tr>
    <tr>
      <td colspan="3">
        <b>Acceptance Criteria:</b><br>
          <ul>
            <li>I only want to access my devices after I'm logged in</li>
            <li>I want to see the device's name</li>
            <li>I want to see the device's status</li>
            <li>I want to be able to control them from this overview</li>
            <li>If no devices are available I want to see this on my dashboard</li>
          </ul>
        </td>
    </tr>
  </tbody>
</table>
