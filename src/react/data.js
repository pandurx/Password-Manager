/**
 * @type {Invoice[]}
 */
 let invoices = [
    {
      name: "Santa Monica",
      number: 1995,
      amount: "$10,800",
      due: "12/05/1995"
    },
    {
      name: "Stankonia",
      number: 2000,
      amount: "$8,000",
      due: "10/31/2000"
    },
    {
      name: "Ocean Avenue",
      number: 2003,
      amount: "$9,500",
      due: "07/22/2003"
    },
    {
      name: "Tubthumper",
      number: 1997,
      amount: "$14,000",
      due: "09/01/1997"
    },
    {
      name: "Wide Open Spaces",
      number: 1998,
      amount: "$4,600",
      due: "01/27/2998"
    },
    {
      name: "Wide Open Spaces",
      number: 2010,
      amount: "$4,600",
      due: "01/27/2998"
    },
    {
      name: "Wide Open Spaces",
      number: 2011,
      amount: "$4,600",
      due: "01/27/2998"
    },
    {
      name: "Wide Open Spaces",
      number: 2012,
      amount: "$4,600",
      due: "01/27/2998"
    },
    {
      name: "Wide Open Spaces",
      number: 2013,
      amount: "$4,600",
      due: "01/27/2998"
    },
    {
      name: "Wide Open Spaces",
      number: 2014,
      amount: "$4,600",
      due: "01/27/2998"
    },
    {
      name: "Wide Open Spaces",
      number: 2015,
      amount: "$4,600",
      due: "01/27/2998"
    },
    {
      name: "Wide Open Spaces",
      number: 2016,
      amount: "$4,600",
      due: "01/27/2998"
    }
  ];
  
  let columns = [
    { field: 'Title', headerName: 'ID', width: 70 },
    { field: 'Username', headerName: 'First name', width: 130 },
    { field: 'Quality', headerName: 'Last name', width: 130 },
    {
      field: 'Password',
      headerName: 'Age',
      type: 'number',
      width: 90,
    }
    // {
    //   field: 'Group',
    //   headerName: 'Full name',
    //   description: 'This column has a value getter and is not sortable.',
    //   sortable: false,
    //   width: 160,
    //   valueGetter: (params) =>
    //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    // },
  ];

  let accounts = {
    data: [
      { Id: 1, Title: 'Facebook', Username: 'Dummy_Username1', Quality: 'Good', Password: 'Password', Group: 'Internet', Url: 'http://facebook.com' },
      { Id: 2, Title: 'Google', Username: 'Dummy_Username2', Quality: 'Ok', Password: 'Password', Group: 'Internet', Url: 'http://facebook.com' },
      { Id: 3, Title: 'Amazon', Username: 'Dummy_Username3', Quality: 'Bad', Password: 'Password', Group: 'Internet', Url: 'http://facebook.com' },
      { Id: 4, Title: 'Microsoft', Username: 'Dummy_Username4', Quality: 'Good', Password: 'Password', Group: 'Internet', Url: 'http://facebook.com' },
      { Id: 5, Title: 'GitHub', Username: 'Dummy_Username5', Quality: 'Good', Password: 'Password', Group: 'Internet', Url: 'http://facebook.com' }
    ],
    headers: [
      { field: 'Title', headerName: 'Title', width: 70, align: 'right' },
      { field: 'Username', headerName: 'Username', width: 130, align: 'right' },
      { field: 'Quality', headerName: 'Quality', width: 130, align: 'right' },
      { field: 'Password', headerName: 'Password', width: 90, align: 'right' },
      //{ field: 'Group', headerName: 'Group', width: 90, align: 'right' },
      { field: 'Url', headerName: 'Url', width: 90, align: 'right' }
    ]
  }

  let title = "Password Manager";
  let user = {
      first: "john",
      last: "doe",
      username: "john.doe@gmail.com"
  };
  let menus = [
      {link:"/socials", icon: "move_to_inbox", text: "Bulk-A"},
      {link:"/emails", icon: "sledding", text: "Bulk-B"},
      {link:"/emails", icon: "surfing", text: "Bulk-C"}
  ];


  export function getInvoices() {
    return invoices;
  }
  
  export function getAccounts() {
    return accounts;
  }

  export function getUser() {
    return user;
  }

  export function getMenus() {
    return menus;
  }

  export function getTitle() {
    return title;
  }
  
  /**
   * @param {number} number
   * @returns {Invoice}
   */
  export function getInvoice(number) {
    return invoices.find(invoice => invoice.number === number);
  }
  
  /**
   * @param {number} number
   * @returns {void}
   */
  export function deleteInvoice(number) {
    invoices = invoices.filter(invoice => invoice.number !== number);
  }
  
  /**
   * @typedef {{ name: string; number: number; amount: string; due: string }} Invoice
   */
  