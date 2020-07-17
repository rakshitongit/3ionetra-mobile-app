import { MemberType } from '../services/storage.service'

export class LoginWithMobile {
    mobile_number: number
    temple_id: string
    member_type: MemberType = MemberType.DEVOTEE
}

export class LoginWithOtp {
    mobile_number: number
    otp: number
}