import axios from "axios";

const baseEndPoint = "http://ergast.com/api/f1";

export const fetchDrivers = async (years) => {
  const { data } = await axios.get(`${baseEndPoint}/${years}/drivers.json`);
  return data.MRData.DriverTable.Drivers;
};

export const fetchYears = async () => {
  const { data } = await axios.get(
    `${baseEndPoint}/seasons.json?limit=30&offset=60`
  );
  return data.MRData.SeasonTable.Seasons;
};

export const fetchSeasons = async () => {
  const { data } = await axios.get(
    `${baseEndPoint}/seasons.json?limit=30&offset=60`
  );
  return data.MRData.SeasonTable.Seasons;
};

export const nextRace = async () => {
  const { data } = await axios.get(`${baseEndPoint}/current/next.json`);
  return data.MRData.RaceTable.Races;
};

export const lastRace = async () => {
  const { data } = await axios.get(`${baseEndPoint}/current/last/results.json`);
  return data.data.MRData.RaceTable.Races;
};

export const driverStanding = async (year) => {
  const { data } = await axios.get(
    `${baseEndPoint}/${year}/driverStandings.json`
  );
  return data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
};

export const calendar = async () => {
  const { data } = await axios.get(`${baseEndPoint}/2021.json`);
  return data.MRData.RaceTable.Races;
};

export const constructorStanding = async (year) => {
  const { data } = await axios.get(
    `${baseEndPoint}/${year}/constructorStandings.json`
  );
  return data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings;
};
