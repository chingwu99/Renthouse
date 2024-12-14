'use client'

import { PuffLoader } from 'react-spinners'

const Loader = () => (
  <div className="flex h-[70vh] flex-col items-center justify-center">
    <PuffLoader size={100} color="#FFAC75" />
  </div>
)

export default Loader
