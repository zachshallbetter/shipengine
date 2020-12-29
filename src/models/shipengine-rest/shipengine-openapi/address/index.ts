import type { Overwrite } from '../../../../utils/ts';

import type {
  AddressValidationResult as _AddressValidationResult,
  PartialAddress as _PartialAddress,
  PartialAddress1 as _PartialAddress1,
  ResponseMessage as _ResponseMessage,
} from './validate_address_response_body';

import type {
  ValidateAddressRequestBody as _ValidateAddressRequestBody,
  AddressToValidate as _AddressToValidate,
} from './validate_address_request_body';

export type ValidateAddressRequestBody = _ValidateAddressRequestBody;

export type AddressToValidate = _AddressToValidate;

export type ResponseMessage = _ResponseMessage;

export type ValidateAddressResponseBody = AddressValidationResult[];

export type MatchedAddress = _PartialAddress1 | _PartialAddress;

export type AddressValidationResult = Overwrite<
  _AddressValidationResult,
  { matched_address: MatchedAddress | null }
>;