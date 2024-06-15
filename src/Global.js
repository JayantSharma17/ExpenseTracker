import toast from "react-hot-toast";

export const BaseURL = 'https://expense-tracker-y0ho.onrender.com';

export const message = (str) => {
  toast(str,
    {
      style: {
        borderRadius: '10px',
        background: 'black',
        color: '#fff',
        border:"2px",
        borderStyle:"solid",
        borderColor:'gray'
      },
    }
  );
}
