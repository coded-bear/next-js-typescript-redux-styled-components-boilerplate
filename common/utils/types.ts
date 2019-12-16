import express from "express";

export type Server = express.Application;
export type Req = express.Request;
export type Res = express.Response;
export type Err = string;

export interface ErrInterface {
  statusCode: number;
}

export type ChangeEvent = React.ChangeEvent<HTMLInputElement>;
export type FormEvent = React.FormEvent<HTMLFormElement>;
export type SelectEvent = React.FormEvent<HTMLSelectElement>;
