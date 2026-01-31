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
        clickSpot: [
          {
            id: "toMobile",
            top: "38%",
            left: "8%",
            width: "18%",
            height: "13%",
          },
        ],
      },
      {
        id: "sendmoney-screen",
        title: "New Payment",
        img: "/phonepe/newPay.PNG",
        instruction: "Tap on New Payment to send money to a contact.",
        clickSpot: [
          {
            id: "newPayment",
            top: "89%",
            left: "54%",
            width: "37%",
            height: "6%",
          },
        ],
      },
      {
        id: "selectcontact-screen",
        title: "Select Contact",
        img: "/phonepe/selectContact.PNG",
        instruction: "Search and select the contact you want to pay.",
        clickSpot: [
          {
            id: "searchContact",
            top: "20%",
            left: "9%",
            width: "83%",
            height: "6%",
          },
        ],
      },
      {
        id: "searchcontact-screen",
        title: "Choose Contact",
        img: "/phonepe/chooseContact.PNG",
        instruction: "Tap the contact to proceed payment.",
        clickSpot: [
          {
            id: "tapToSelect",
            top: "26%",
            left: "9%",
            width: "83%",
            height: "7%",
          },
        ],
      },
      {
        id: "pay-screen",
        title: "Pay Amount",
        img: "/phonepe/payAmount.PNG",
        instruction: "Tap Pay and enter your UPI PIN.",
        clickSpot: [
          {
            id: "Pay",
            top: "53%",
            left: "5%",
            width: "90%",
            height: "7%",
          },
        ],
      },
      {
        id: "upi-screen",
        title: "Enter UPI",
        img: "/phonepe/upi.PNG",
        instruction: "Enter your UPI pin and click SUBMIT button.",
        clickSpot: [
          {
            id: "Upi",
            top: "70%",
            left: "5%",
            width: "90%",
            height: "25%",
          },
        ],
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
        img: "/whatsapp/whatsappScreen.PNG",
        instruction:
          "This ii WhatsApp chats list. All your conversations appear here. To make a video call, first tap on the contact you want to call. In our example lets take Random",
        clickSpot: [
          {
            id: "toMobile",
            top: "35%",
            left: "7%",
            width: "86%",
            height: "9%",
          },
        ],
      },
      {
        id: "chat-screen",
        title: "Open Chat",
        img: "/whatsapp/chatScreen.PNG",
        instruction:
          "This is the chat screen. Tap the video camera icon to start the video call.",
        clickSpot: [
          {
            id: "toMobile",
            top: "7%",
            left: "69%",
            width: "13%",
            height: "5%",
          },
        ],
      },
      {
        id: "calling",
        title: "Video Call Started",
        img: "/whatsapp/calling.PNG",
        instruction: "Your video call has started. Talk freely!",
        clickSpot: [
          {
            id: "toMobile",
            top: "84%",
            left: "73%",
            width: "15%",
            height: "8%",
          },
        ],
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
        id: "set-pickup",
        title: "Confirm Pickup Location",
        img: "/ola/pickup.PNG",
        instruction:
          "Open the Ola app on your phone 1. Allow location access if asked 2. Check your pickup location. Move the pin if needed.",
        clickSpot: [
          {
            id: "toMobile",
            top: "25%",
            left: "45%",
            width: "10%",
            height: "7%",
          },
        ],
      },
      {
        id: "search-destination",
        title: "Click on Search Destination",
        img: "/ola/pickup.PNG",
        instruction: "Tap on Search Destination",
        clickSpot: [
          {
            id: "toMobile",
            top: "55%",
            left: "8%",
            width: "84%",
            height: "5%",
          },
        ],
      },
      {
        id: "set-drop",
        title: "Enter Drop Location",
        img: "/ola/destination.PNG",
        instruction: "Search and select where you want to go.",
        clickSpot: [
          {
            id: "toMobile",
            top: "27%",
            left: "6%",
            width: "88%",
            height: "7%",
          },
        ],
      },
      {
        id: "select-cab",
        title: "Select Cab Type",
        img: "/ola/cabOption.PNG",
        instruction:
          "Choose a cab -> Auto, Bike, Mini or Prime based on your need. Select payment method -> Cash. In our example lets take Auto and tap on Book Auto button",
        clickSpot: [
          {
            id: "toMobile",
            top: "90%",
            left: "8%",
            width: "84%",
            height: "5%",
          },
        ],
      },
    ],
  },
  {
    slug: "google-maps",
    title: "Navigate Using Google Maps",
    desc: "Step-by-step guide to find directions and start navigation using Google Maps.",
    image: "/logos/googleMap.png",
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
  // {
  //   slug: "electricity-bill",
  //   title: "Pay Electricity Bill",
  //   desc: "Step-by-step guide to pay your electricity bill using a UPI app.",
  //   image: "/logos/electricity.png",
  //   steps: [
  //     {
  //       id: "upi-home",
  //       title: "Open UPI App",
  //       img: "/electricity/home.png",
  //       instruction: "Open PhonePe or any UPI app on your phone.",
  //       actionId: "open-upi",
  //       next: "bill-payments",
  //     },
  //     {
  //       id: "bill-payments",
  //       title: "Go to Bill Payments",
  //       img: "/electricity/bills.png",
  //       instruction: "Tap on Bill Payments or Recharge & Bills option.",
  //       actionId: "open-bills",
  //       next: "select-electricity",
  //     },
  //     {
  //       id: "select-electricity",
  //       title: "Select Electricity",
  //       img: "/electricity/electricity.png",
  //       instruction: "Choose Electricity from the list of billers.",
  //       actionId: "select-electricity",
  //       next: "select-provider",
  //     },
  //     {
  //       id: "select-provider",
  //       title: "Choose Provider",
  //       img: "/electricity/provider.png",
  //       instruction:
  //         "Select your electricity board (for example: BESCOM, TNEB, MSEB).",
  //       actionId: "select-provider",
  //       next: "enter-consumer-id",
  //     },
  //     {
  //       id: "enter-consumer-id",
  //       title: "Enter Consumer Number",
  //       img: "/electricity/consumer.png",
  //       instruction:
  //         "Enter your Consumer Number shown on your electricity bill.",
  //       actionId: "enter-consumer",
  //       next: "confirm-bill",
  //     },
  //     {
  //       id: "confirm-bill",
  //       title: "Confirm Bill",
  //       img: "/electricity/confirm.png",
  //       instruction: "Check the bill amount and due date, then tap Pay.",
  //       actionId: "confirm-pay",
  //       next: "enter-pin",
  //     },
  //     {
  //       id: "enter-pin",
  //       title: "Enter UPI PIN",
  //       img: "/electricity/pin.png",
  //       instruction: "Enter your UPI PIN to complete the payment.",
  //       actionId: "enter-pin",
  //       next: "completion",
  //     },
  //   ],
  // },
  // {
  //   slug: "train-ticket",
  //   title: "Book Train Tickets",
  //   desc: "Step-by-step guide to book train tickets using IRCTC.",
  //   image: "/logos/train.png",
  //   steps: [
  //     {
  //       id: "irctc-home",
  //       title: "Open IRCTC App",
  //       img: "/train/home.png",
  //       instruction:
  //         "Open the IRCTC Rail Connect app or visit the IRCTC website.",
  //       actionId: "open-irctc",
  //       next: "enter-journey",
  //     },
  //     {
  //       id: "enter-journey",
  //       title: "Enter Journey Details",
  //       img: "/train/journey.png",
  //       instruction: "Enter From, To, journey date, and select class.",
  //       actionId: "enter-details",
  //       next: "search-train",
  //     },
  //     {
  //       id: "search-train",
  //       title: "Search Trains",
  //       img: "/train/search.png",
  //       instruction: "Tap on Search Trains to see available trains.",
  //       actionId: "search-trains",
  //       next: "select-train",
  //     },
  //     {
  //       id: "select-train",
  //       title: "Select Train",
  //       img: "/train/select-train.png",
  //       instruction: "Choose a train and select class (SL, 3A, 2A, etc.).",
  //       actionId: "select-train",
  //       next: "add-passenger",
  //     },
  //     {
  //       id: "add-passenger",
  //       title: "Add Passenger Details",
  //       img: "/train/passenger.png",
  //       instruction: "Enter passenger name, age, and gender.",
  //       actionId: "add-passenger",
  //       next: "seat-preference",
  //     },
  //     {
  //       id: "seat-preference",
  //       title: "Seat Preference",
  //       img: "/train/seat.png",
  //       instruction: "Choose seat preference if needed and continue.",
  //       actionId: "select-seat",
  //       next: "payment",
  //     },
  //     {
  //       id: "payment",
  //       title: "Make Payment",
  //       img: "/train/payment.png",
  //       instruction: "Pay using UPI, card, or net banking.",
  //       actionId: "make-payment",
  //       next: "enter-pin",
  //     },
  //     {
  //       id: "enter-pin",
  //       title: "Enter PIN",
  //       img: "/train/pin.png",
  //       instruction: "Enter your UPI PIN or bank OTP to confirm booking.",
  //       actionId: "enter-pin",
  //       next: "completion",
  //     },
  //   ],
  // },
];

export default tutorials;
