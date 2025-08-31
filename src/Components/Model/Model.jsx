import {Button, Checkbox, Label, Modal, TextInput} from "flowbite-react";
import {useState} from "react";
import toast from "react-hot-toast";
const Model = () => {
  const [openModal, setOpenModal] = useState(false);
  const [orderDetails, setOrderDetails] = useState({
    fullname: "",
    address: "",
    mobile: "",
    pincode: "",
  });

  const handleChange = (e) => {
    setOrderDetails({...orderDetails, [e.target.name]: e.target.value});
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !orderDetails.fullname ||
      !orderDetails.address ||
      !orderDetails.mobile ||
      !orderDetails.pincode
    ) {
      return toast.error("All Field are Required");
    } else {
      toast.success("Order Placed Successfully!");
      onCloseModal();
    }
  };
  function onCloseModal() {
    setOpenModal(false);
    setOrderDetails("");
  }
  return (
    <>
      <Button
        className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-1 text-sm text-white uppercase w-full"
        onClick={() => setOpenModal(true)}
      >
        checkout
      </Button>
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6 w-[400px] mx-auto  p-2 mb-10">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="name" value="Your Full Name" />
              </div>
              <TextInput
                id="name"
                value={orderDetails.fullname}
                onChange={handleChange}
                required
                autoComplete="off"
                name="fullname"
              />
            </div>

            <div>
              <div className="mb-2 block">
                <Label htmlFor="address" value="Enter Full Address" />
              </div>
              <TextInput
                id="address"
                type="text"
                value={orderDetails.address}
                onChange={handleChange}
                required
                autoComplete="off"
                name="address"
              />
            </div>
            {/* pincode */}
            <div>
              <div className="mb-2 block">
                <Label htmlFor="pin" value="Your Pincode" />
              </div>
              <TextInput
                id="pin"
                type="number"
                value={orderDetails.pincode}
                onChange={handleChange}
                required
                autoComplete="off"
                name="pincode"
              />
            </div>

            <div>
              <div className="mb-2 block">
                <Label htmlFor="mobile" value="Your Mobile Number" />
              </div>
              <TextInput
                id="mobile"
                type="number"
                value={orderDetails.mobile}
                onChange={handleChange}
                required
                autoComplete="off"
                name="mobile"
              />
            </div>
            <div className="w-full ">
              <Button className="w-full bg-slate-600 " onClick={handleSubmit}>
                Order Now
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Model;
