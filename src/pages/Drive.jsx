import useDrivePicker from 'react-google-drive-picker'

function Drive() {
  const [openPicker] = useDrivePicker();

  const handleOpenPicker = () => {
    openPicker({
      clientId: "82214308072-21se195n066mmtbi5uaqkvdrlhtpqk35.apps.googleusercontent.com",
      developerKey: "AIzaSyC1ph0mlZfgsKEKk28gm3MxzKkw23UT44g",
      viewId: "DOCS",
      token: "ya29.a0AWY7Ckneklz3IdoSymdq4y0KUoITZLeHeeUDha4mJL3TVXajw3-wgTZfJGvZvXGl5IVO0o9m6ObPBg0McRmKv4gWwGAvnlFalXtzFqoU-XedW9a4hwojukYfUGjfj31vCZpile7xYdil7ZGtXrTpWrWj4oQyUSIaCgYKAb8SARMSFQG1tDrpcfU5aLs3m4FHf9E-8AYyog0166",
      showUploadView: true,
      showUploadFolders: true,
      supportDrives: true,
      multiselect: true,
      callbackFunction: (data) => {
        if (data.action === 'cancel') {
          console.log('User clicked cancel/close button')
        }
        console.log(data)
      },
    })
  }

  return (
    <div>
      <button onClick={() => handleOpenPicker()}>Open Picker</button>
    </div>
  );
}

export default Drive;