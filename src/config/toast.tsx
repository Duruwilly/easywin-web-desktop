import toast from 'react-hot-toast';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import { VscClose } from 'react-icons/vsc';

class ToastClass {
  success(message: string) {
    toast.success(message, {
      icon: <IoMdCheckmarkCircleOutline size={22} />,
      position: 'top-right',
      style: {
        borderLeftWidth: '4px',
        borderLeftColor: '#009951',
        padding: '5px 8px',
        color: '#0C4838',
        background: '#D4F7E5',
        borderRadius: '4px',
        fontWeight: '500',
        width: 'auto',
        height: 'auto',
        textAlign: 'left',
        fontSize: '14px',
        // minWidth: '300px'
      },
    });
  }

  error(message: string) {
    toast.error(message, {
      icon: <VscClose size={22} />,
      position: 'top-right',
      style: {
        padding: '5px 12px',
        color: '#fff',
        background: '#da072b',
        borderRadius: '4px',
        fontWeight: '500',
        width: 'auto',
        height: 'auto',
        textAlign: 'left',
        fontSize: '14px',
      },
    });
  }

  info(message: string) {
    toast.success(message, {
      icon: null,
      position: 'top-right',
      style: {
        borderLeftWidth: '4px',
        borderLeftColor: '#009951',
        padding: '5px 12px',
        color: '#fff',
        background: '#8C77EB',
        borderRadius: '4px',
        fontWeight: '500',
        width: 'auto',
        height: 'auto',
        textAlign: 'left',
        fontSize: '14px',
      },
    });
  }
}

export const Toast = new ToastClass();
