import { createSelector, createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '.'

type SessionState = {
  lastChainId: string
  lastSafeAddress: { [chainId: string]: string }
  lastWallet: string
}

const initialState: SessionState = {
  lastChainId: '',
  lastSafeAddress: {},
  lastWallet: '',
}

export const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    setLastWallet: (state, action: PayloadAction<SessionState['lastWallet']>) => {
      state.lastWallet = action.payload
    },
    setLastChainId: (state, action: PayloadAction<SessionState['lastChainId']>) => {
      state.lastChainId = action.payload
    },
    setLastSafeAddress: (
      state,
      action: PayloadAction<{
        chainId: string
        safeAddress: string
      }>,
    ) => {
      const { chainId, safeAddress } = action.payload
      state.lastSafeAddress[chainId] = safeAddress
    },
  },
})

export const { setLastChainId, setLastSafeAddress, setLastWallet } = sessionSlice.actions

export const selectSession = (state: RootState): SessionState => {
  return state[sessionSlice.name]
}

export const selectLastSafeAddress = createSelector(
  [selectSession, (_, chainId: string) => chainId],
  (session, chainId): string | undefined => {
    return session.lastSafeAddress[chainId]
  },
)
