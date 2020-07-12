
export const columns = [
    { id: 'name', label: 'Name', minWidth: 300 },
    { id: 'status', label: 'Status', minWidth: 100 , align: 'center'},
    { id: 'major', label: 'Major', minWidth: 170, align: 'right'}
  ];
  
  
  function createData(name, status, major) {
    return { name, status, major };
  }
  
export  const rowstab = [
    createData('hassan mokhtar saad', 'Initial Acceptance', 'Medicine'),
    createData('Mohamed Samy Abdelaal', 'Under Review', 'Medicine'),
    createData('Zakaria Hassan Abdellatif', 'Conditional Acceptance', 'Medicine'),
    createData('Zakaria Mohamed Zakaria', 'Initial Acceptance', 'Medicine'),
    createData('Omar Mokhtar Ismail', 'Rejected', 'Medicine'),
    createData('hassan mokhtar saad', 'Initial Acceptance', 'Medicine'),
    createData('Mohamed Samy Abdelaal', 'Under Review', 'Medicine'),
    createData('Zakaria Mohamed Zakaria', 'Initial Acceptance', 'Medicine'),
    createData('Omar Mokhtar Ismail', 'Rejected', 'Medicine'),
    createData('Zakaria Mohamed Zakaria', 'Initial Acceptance', 'Medicine'),
    createData('Zakaria Mohamed Zakaria', 'Initial Acceptance', 'Medicine'),
    createData('Omar Mokhtar Ismail', 'Rejected', 'Medicine'),
    createData('hassan mokhtar saad', 'Initial Acceptance', 'Medicine'),
    createData('Mohamed Samy Abdelaal', 'Under Review', 'Medicine'),
    createData('Zakaria Hassan Abdellatif', 'Conditional Acceptance', 'Medicine'),
  ];