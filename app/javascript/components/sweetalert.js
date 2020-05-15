import Swal from 'sweetalert2'

const sweetalertDelete = () => {
  const delete_icons = document.querySelectorAll(".fa-trash")
  delete_icons.forEach((icon) => {
    icon.addEventListener("click", (event) => {
      event.preventDefault;
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.value) {
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      })
    });
  });
};


export { sweetalertDelete };


