<?php

namespace Database\Factories;

use App\Models\Jobs;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Jobs>
 */
class JobsFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    protected $model = Jobs::class;
    public function definition(): array
    {
        return [
            //fake jobs data
            'title' => $this->faker->jobTitle(),
           // 'salary' => $this->faker->numberBetween(40000, 120000),
            'salary' => fake()->randomElement(['$70,000 - $90,000', '$100,000+', 'Negotiable']),
            'location' => $this->faker->city(),
        ];
    }
}
