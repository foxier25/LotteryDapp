import Identicon from 'react-identicons'
import Countdown from '@/components/Countdown'
import Link from 'next/link'

const Result = ({ jackpot }) => {
  return (
    <div className="mx-auto py-16 bg-slate-100 space-y-4">
      <div className="flex flex-col items-center justify-center text-center py-10">
        <h1 className="text-2xl font-bold pb-4">Lottery Result</h1>
        <p className="text-lg text-gray-600 font-semibold capitalize">{jackpot.title}</p>
        <p className="text-sm text-gray-500 w-full sm:w-2/3">{jackpot.description}</p>
      </div>

      <div className="flex flex-col justify-center items-center space-y-4 mb-6">
        <Countdown timestamp={jackpot.expiresAt} />

        <div className="flex justify-center items-center space-x-2">
          <button
            disabled={Date.now() < jackpot.expiresAt}
            className={`flex flex-nowrap border py-2 px-4 rounded-full bg-amber-500
            hover:bg-rose-600 font-semibold
            ${
              Date.now() < jackpot.expiresAt ? 'opacity-50 cursor-not-allowed' : 'hover:bg-rose-600'
            }`}
          >
            Perform Draw
          </button>

          <Link
            href={`/jackpots/` + jackpot.id}
            className="flex flex-nowrap border py-2 px-4 rounded-full bg-[#0c2856]
            hover:bg-[#1a396c] cursor-pointer font-semibold text-white"
          >
            Jackpot
          </Link>
        </div>
      </div>

      <div className="flex flex-col-reverse sm:flex-row ">
        <div
          className="bg-white flex flex-col w-full sm:w-3/4 mx-auto
        p-5 rounded-md space-y-2 max-h-80 overflow-y-auto"
        >
          <h4 className="text-2xl font-bold text-slate-700 text-center">Our Winners</h4>

          {Array(5)
            .fill()
            .map((winner, i) => (
              <div
                key={i}
                className="flex justify-start items-center border-b border-gray-100 py-2 space-x-2"
              >
                <Identicon size={30} string={i} className="rounded-full h-12 w-12" />
                <div className="flex flex-col text-sm">
                  <p className="font-semibold text-lg text-slate-500">Jemmy White</p>
                  <div className="flex justify-start items-center space-x-2">
                    <p className="text-green-500 font-bold">23 ETH</p>
                    <p className="text-slate-500">15/01/2023</p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>

      <div className="flex flex-col-reverse sm:flex-row ">
        <div
          className="bg-white flex flex-col w-full sm:w-3/4 mx-auto
        p-5 rounded-md space-y-2 max-h-80 overflow-y-auto"
        >
          <h4 className="text-2xl font-bold text-slate-700 text-center">All Participants</h4>

          {Array(19)
            .fill()
            .map((winner, i) => (
              <div
                key={i}
                className="flex justify-start items-center border-b border-gray-100 py-2 space-x-2"
              >
                <Identicon size={30} string={i} className="rounded-full h-12 w-12" />
                <div className="flex flex-col text-sm">
                  <p className="font-semibold text-lg text-slate-500">Jemmy White</p>
                  <div className="flex justify-start items-center space-x-2">
                    <p className="text-green-500 font-bold">23 ETH</p>
                    <p className="text-slate-500">15/01/2023</p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Result
