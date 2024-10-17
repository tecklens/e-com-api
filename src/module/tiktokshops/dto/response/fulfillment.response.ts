import { TiktokResponseCommon } from './config.response';

interface PickupSlot {
  available: boolean;
  end_time: boolean;
  start_time: boolean;
}

interface PackageTimeSlot {
  can_drop_off: boolean;
  can_pickup: boolean;
  drop_off_point_url: string;
  pickup_slots: Array<PickupSlot>;
}

type ResponsePackageTimeSlot = TiktokResponseCommon<PackageTimeSlot>;

export { ResponsePackageTimeSlot as TiktokResponsePackageTimeSlot };
