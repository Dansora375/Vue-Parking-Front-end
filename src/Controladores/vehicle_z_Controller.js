import * as Dao from '@/models/DAO/vehicle_zoneDAO';

export async function data_info_parq() {
  const datos = await Dao.list_info_parq();
  return datos;
}