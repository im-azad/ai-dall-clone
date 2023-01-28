import { surpriseMePrompts } from '../constants';

export function getRandomPrompt(prompt) {
    // create random index
    const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
    //return random prompt form surpriseMe Prompts
    const randomPrompt = surpriseMePrompts[randomIndex];

    //recall getRandomPrompt when randomPrompt === prompt
    if (randomPrompt === prompt) return getRandomPrompt(prompt);
    return randomPrompt;
}
