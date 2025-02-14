/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { DateRangeInputProps } from "@blueprintjs/datetime";

import { DateRangePicker3Props } from "../date-range-picker3/dateRangePicker3Props";

/** Props shared between DateRangeInput v1 and v3 */
type DateRangeInputSharedProps = Omit<DateRangeInputProps, "dayPickerProps" | "locale" | "localeUtils" | "modifiers">;

export type DateRangeInput3Props = DateRangeInputSharedProps & Pick<DateRangePicker3Props, "dayPickerProps" | "locale">;

export type DateRangeInput3DefaultProps = Required<
    Pick<
        DateRangeInput3Props,
        | "allowSingleDayRange"
        | "closeOnSelection"
        | "contiguousCalendarMonths"
        | "dayPickerProps"
        | "disabled"
        | "endInputProps"
        | "invalidDateMessage"
        | "maxDate"
        | "minDate"
        | "outOfRangeMessage"
        | "overlappingDatesMessage"
        | "popoverProps"
        | "selectAllOnFocus"
        | "shortcuts"
        | "singleMonthOnly"
        | "startInputProps"
    >
>;

export type DateRangeInput3PropsWithDefaults = Omit<DateRangeInput3Props, keyof DateRangeInput3DefaultProps> &
    DateRangeInput3DefaultProps;
