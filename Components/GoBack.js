import Link from 'next/link';
import { Button } from '@mui/material';

const GoBack = () => {
  return (
    <Button variant="text" style={{color:"black"}}>
      <Link href="/">
        &larr; Go Back
      </Link>
    </Button>
  )
}

export default GoBack
