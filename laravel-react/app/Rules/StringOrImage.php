<?php

namespace App\Rules;

use Closure;
use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Support\Facades\Validator;
use Illuminate\Translation\PotentiallyTranslatedString;

class StringOrImage implements ValidationRule
{
    /**
     * Run the validation rule.
     *
     * @param  \Closure(string): \Illuminate\Translation\PotentiallyTranslatedString  $fail
     */
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        // Check if the field is a valid image
        if (request()->hasFile($attribute)) {
            $file = request()->file($attribute);
            $validator = Validator::make(
                [$attribute => $file],
                [$attribute => 'image|mimes:jpeg,png,jpg|max:2048']
            );

            if ($validator->fails()) {
                $fail($validator->errors()->first($attribute));
                return;
            }

            return;
        }

        // Check if the field is a valid string
        if (!is_string($value)) {
            $fail('The ' . $attribute . ' must be a valid image file or a string.');
            return;
        }
    }
}
