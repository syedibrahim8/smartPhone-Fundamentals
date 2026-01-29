const tutorials = [
  {
    slug: "phonepe",
    title: "Send Money with PhonePe",
    desc: "Step-by-step guide to send money using PhonePe.",
    image: "/logos/pelogo.png",
    steps: [
      {
        id: "home-screen",
        title: "Open PhonePe",
        img: "/phonepe/payHome.PNG",
        instruction:
          "This is the PhonePe home screen. Tap on 'To mobile number' under Money Transfers.",
        actionId: "to-mobile-button",
        next: "sendmoney-screen",
        clickSpot:[{
          id: "toMobile",
          top:"38%",
          left:"8%",
          width:"18%",
          height:"13%",
          onClick:() => alert("To Mobile Number Clicked")
        }]
      },
      {
        id: "sendmoney-screen",
        title: "New Payment",
        img: "/phonepe/newPay.PNG",
        instruction: "Tap on New Payment to send money to a contact.",
        actionId: "new-payment",
        next: "selectcontact-screen",
        clickSpot: [
          {
            id: "newPayment",
            top:"89%",
            left:"54%",
            width:"37%",
            height:"6%",
            onClick:() => alert("New Payment Clicked")
          }
        ]
      },
      {
        id: "selectcontact-screen",
        title: "Select Contact",
        img: "/phonepe/selectContact.PNG",
        instruction: "Search and select the contact you want to pay.",
        actionId: "search-contact",
        next: "searchcontact-screen",
        clickSpot: [
          {
            id: "newPayment",
            top:"20%",
            left:"9%",
            width:"83%",
            height:"6%",
            onClick:() => alert("select Contact Clicked")
          }
        ]
      },
      {
        id: "searchcontact-screen",
        title: "Choose Contact",
        img: "/phonepe/chooseContact.PNG",
        instruction: "Tap the contact to proceed payment.",
        actionId: "tap-to-select",
        next: "pay-screen",
        clickSpot: [
          {
            id: "newPayment",
            top:"26%",
            left:"9%",
            width:"83%",
            height:"7%",
            onClick:() => alert("select Contact Clicked")
          }
        ]
      },
      {
        id: "pay-screen",
        title: "Pay Amount",
        img: "/phonepe/payAmount.PNG",
        instruction: "Tap Pay and enter your UPI PIN.",
        actionId: "pay",
        next: "completion",
        clickSpot: [
          {
            id: "newPayment",
            top:"53%",
            left:"5%",
            width:"90%",
            height:"7%",
            onClick:() => alert("select Contact Clicked")
          }
        ]
      },
    ],
  },
  {
    slug: "whatsapp",
    title: "WhatsApp Video Call",
    desc: "Learn how to make video calls.",
    image: "/logos/whatsapp.png",
    steps: [
      {
        id: "whatsapp-home",
        title: "Open WhatsApp",
        img: "/whatsapp/home.png",
        instruction: "Open the WhatsApp application on your phone.",
        actionId: "open-whatsapp",
        next: "select-chat",
      },
      {
        id: "select-chat",
        title: "Select Contact",
        img: "/whatsapp/chat-list.png",
        instruction: "Tap on the contact you want to video call.",
        actionId: "tap-chat",
        next: "chat-screen",
      },
      {
        id: "chat-screen",
        title: "Open Chat",
        img: "/whatsapp/chat.png",
        instruction: "This is the chat screen.",
        actionId: "chat-open",
        next: "video-call",
      },
      {
        id: "video-call",
        title: "Start Video Call",
        img: "/whatsapp/video-call.png",
        instruction: "Tap the video camera icon to start the video call.",
        actionId: "video-icon",
        next: "calling",
      },
      {
        id: "calling",
        title: "Video Call Started",
        img: "/whatsapp/calling.png",
        instruction: "Your video call has started. Talk freely!",
        actionId: "call-started",
        next: "completion",
      },
    ],
  },
  {
    slug: "ola",
    title: "Book a Cab with Ola",
    desc: "Step-by-step guide to book a cab using the Ola app.",
    image: "/logos/ola.png",
    steps: [
      {
        id: "ola-home",
        title: "Open Ola App",
        img: "/ola/home.png",
        instruction:
          "Open the Ola app on your phone. Allow location access if asked.",
        actionId: "open-ola",
        next: "set-pickup",
      },
      {
        id: "set-pickup",
        title: "Confirm Pickup Location",
        img: "/ola/pickup.png",
        instruction: "Check your pickup location. Move the pin if needed.",
        actionId: "confirm-pickup",
        next: "set-drop",
      },
      {
        id: "set-drop",
        title: "Enter Drop Location",
        img: "/ola/drop.png",
        instruction: "Search and select where you want to go.",
        actionId: "enter-drop",
        next: "select-cab",
      },
      {
        id: "select-cab",
        title: "Select Cab Type",
        img: "/ola/cab-options.png",
        instruction:
          "Choose a cab type like Mini, Auto, or Prime based on your need.",
        actionId: "select-cab",
        next: "confirm-ride",
      },
      {
        id: "confirm-ride",
        title: "Confirm Ride",
        img: "/ola/confirm.png",
        instruction: "Tap on Book Now to confirm your ride.",
        actionId: "book-now",
        next: "driver-assigned",
      },
      {
        id: "driver-assigned",
        title: "Driver Assigned",
        img: "/ola/driver.png",
        instruction:
          "A driver has been assigned. You can see driver details and track the cab.",
        actionId: "driver-info",
        next: "completion",
      },
    ],
  },
  {
    slug: "google-maps",
    title: "Navigate Using Google Maps",
    desc: "Step-by-step guide to find directions and start navigation using Google Maps.",
    image: "/logos/google-maps.png",
    steps: [
      {
        id: "maps-home",
        title: "Open Google Maps",
        img: "/maps/home.png",
        instruction:
          "Open Google Maps on your phone. Make sure location is turned ON.",
        actionId: "open-maps",
        next: "search-place",
      },
      {
        id: "search-place",
        title: "Search Destination",
        img: "/maps/search.png",
        instruction: "Tap on the search bar and type the place you want to go.",
        actionId: "search-destination",
        next: "select-place",
      },
      {
        id: "select-place",
        title: "Select Location",
        img: "/maps/select-place.png",
        instruction: "Tap on the correct place from the search results.",
        actionId: "select-location",
        next: "get-directions",
      },
      {
        id: "get-directions",
        title: "Get Directions",
        img: "/maps/directions.png",
        instruction: "Tap on the Directions button to see routes.",
        actionId: "tap-directions",
        next: "select-mode",
      },
      {
        id: "select-mode",
        title: "Choose Travel Mode",
        img: "/maps/mode.png",
        instruction: "Choose how you want to travel: bike, car, walk, or bus.",
        actionId: "select-mode",
        next: "start-navigation",
      },
      {
        id: "start-navigation",
        title: "Start Navigation",
        img: "/maps/start.png",
        instruction:
          "Tap on Start. Follow the voice instructions while traveling.",
        actionId: "start-navigation",
        next: "completion",
      },
    ],
  },
  {
    slug: "electricity-bill",
    title: "Pay Electricity Bill",
    desc: "Step-by-step guide to pay your electricity bill using a UPI app.",
    image: "/logos/electricity.png",
    steps: [
      {
        id: "upi-home",
        title: "Open UPI App",
        img: "/electricity/home.png",
        instruction: "Open PhonePe or any UPI app on your phone.",
        actionId: "open-upi",
        next: "bill-payments",
      },
      {
        id: "bill-payments",
        title: "Go to Bill Payments",
        img: "/electricity/bills.png",
        instruction: "Tap on Bill Payments or Recharge & Bills option.",
        actionId: "open-bills",
        next: "select-electricity",
      },
      {
        id: "select-electricity",
        title: "Select Electricity",
        img: "/electricity/electricity.png",
        instruction: "Choose Electricity from the list of billers.",
        actionId: "select-electricity",
        next: "select-provider",
      },
      {
        id: "select-provider",
        title: "Choose Provider",
        img: "/electricity/provider.png",
        instruction:
          "Select your electricity board (for example: BESCOM, TNEB, MSEB).",
        actionId: "select-provider",
        next: "enter-consumer-id",
      },
      {
        id: "enter-consumer-id",
        title: "Enter Consumer Number",
        img: "/electricity/consumer.png",
        instruction:
          "Enter your Consumer Number shown on your electricity bill.",
        actionId: "enter-consumer",
        next: "confirm-bill",
      },
      {
        id: "confirm-bill",
        title: "Confirm Bill",
        img: "/electricity/confirm.png",
        instruction: "Check the bill amount and due date, then tap Pay.",
        actionId: "confirm-pay",
        next: "enter-pin",
      },
      {
        id: "enter-pin",
        title: "Enter UPI PIN",
        img: "/electricity/pin.png",
        instruction: "Enter your UPI PIN to complete the payment.",
        actionId: "enter-pin",
        next: "completion",
      },
    ],
  },
  {
    slug: "train-ticket",
    title: "Book Train Tickets",
    desc: "Step-by-step guide to book train tickets using IRCTC.",
    image: "/logos/train.png",
    steps: [
      {
        id: "irctc-home",
        title: "Open IRCTC App",
        img: "/train/home.png",
        instruction:
          "Open the IRCTC Rail Connect app or visit the IRCTC website.",
        actionId: "open-irctc",
        next: "enter-journey",
      },
      {
        id: "enter-journey",
        title: "Enter Journey Details",
        img: "/train/journey.png",
        instruction: "Enter From, To, journey date, and select class.",
        actionId: "enter-details",
        next: "search-train",
      },
      {
        id: "search-train",
        title: "Search Trains",
        img: "/train/search.png",
        instruction: "Tap on Search Trains to see available trains.",
        actionId: "search-trains",
        next: "select-train",
      },
      {
        id: "select-train",
        title: "Select Train",
        img: "/train/select-train.png",
        instruction: "Choose a train and select class (SL, 3A, 2A, etc.).",
        actionId: "select-train",
        next: "add-passenger",
      },
      {
        id: "add-passenger",
        title: "Add Passenger Details",
        img: "/train/passenger.png",
        instruction: "Enter passenger name, age, and gender.",
        actionId: "add-passenger",
        next: "seat-preference",
      },
      {
        id: "seat-preference",
        title: "Seat Preference",
        img: "/train/seat.png",
        instruction: "Choose seat preference if needed and continue.",
        actionId: "select-seat",
        next: "payment",
      },
      {
        id: "payment",
        title: "Make Payment",
        img: "/train/payment.png",
        instruction: "Pay using UPI, card, or net banking.",
        actionId: "make-payment",
        next: "enter-pin",
      },
      {
        id: "enter-pin",
        title: "Enter PIN",
        img: "/train/pin.png",
        instruction: "Enter your UPI PIN or bank OTP to confirm booking.",
        actionId: "enter-pin",
        next: "completion",
      },
    ],
  },
];

export default tutorials;
